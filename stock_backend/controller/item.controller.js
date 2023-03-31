const Product = require('../models/item.model')
const User = require('../models/user.model')
const Portfolio = require('../models/portfolio.model');

exports.add = async (req, res) => {
    const itemobj = {
        name: req.body.name,
        price: req.body.price,
        ticker: req.body.ticker,
        category: req.body.category
    }

    const productcreated = await Product.create(itemobj);

    const response = {
        name: productcreated.name,
        id: productcreated._id,
        'message': 'Successfully Created'
    }

    return res.status(200).send(response)
}

exports.buy_item = async (req, res) => {
    body = req.body
    user_id = req.userId

    const user = await User.findOne({_id: user_id});

    money_left = user.money - (body.price * body.quantity)

    if (money_left < 0) {
        return res.status(200).send({
            message: "Inssufficient Money..."
        });
    }

    var obj = {
        name: body.name,
        symbol: body.symbol,
        volume: body.volume,
        category: body.category,
        price: body.price
    };

    var product_obj = await Product.findOne({
        symbol: obj.symbol
    });
    
    if (!product_obj) {
        product_obj = await Product.create(obj);
    } else {
        const product_update = await Product.updateOne({
            symbol: obj.symbol
        }, {
            volume: obj.volume,
            price: obj.price
        });
    }

    const port_obj = await Portfolio.create({
        user_id: user_id,
        item_id: product_obj._id,
        quantity: body.quantity,
        price: obj.price
    });
    const user_obj = await User.updateOne({
        _id: user_id
    }, {
        money: money_left
    });
    if (port_obj && user_obj) {
        return res.status(200).send({
            "message": "Successfully Done...",
            data: {
                _id: port_obj._id,
                money_left: money_left
            }
        })
    } else {
        return res.status(301).send({
            "message": "Some Internal error"
        })
    }
}


exports.sell_item = async (req, res) => {
    var body = req.body;
    var user_id = req.userId;

    var symbol = body.symbol;
    var quantity = body.quantity;
    var curr_price = body.price;

    const product_id = await Product.find({symbol: symbol}, {_id:1});

    if (!product_id) {
        return res.status(200).send({
            "message": "User does not have this product"
        })
    }

    const portfolio_check = await Portfolio.find({
        user_id: user_id,
        item_id: product_id
    }, {
        _id: 1, 
        quantity:1,
        price: 1
    }).sort({price: 1});

    if (!portfolio_check) {
        return res.status(200).send({
            "message": "User does not have this item"
        });
    }

    lst = [];
    money = 0;
    update_id = "";
    update_quantity = 0;
    portfolio_check.forEach((obj) => {
        if (obj.quantity <= quantity) {
            quantity = quantity - obj.quantity;
            money = money + obj.quantity * obj.price
            lst.push(obj._id)
        } else {
            money = money + quantity * obj.price;
            update_id = obj._id;
            quantity = 0;
            update_quantity = obj.quantity - quantity;
        }
    })

    if (quantity > 0) {
        return res.status(200).send({
            message: "You don't have this much quantity in your portfolio"
        });
    }

    if (update_id && update_quantity > 0) {
        await Portfolio.updateOne({
            _id: update_id
        }, {
            quantity: update_quantity
        });
    }

    if (lst) {
        await Portfolio.deleteMany({
            _id: {$in: lst}
        });
    }
    
    var user = await User.findOne({_id: user_id});

    const user_obj = await User.updateOne({
        _id: user_id
    }, {
        money: Number(user.money) + Number(curr_price) * Number(quantity) - Number(money)
    });


    return res.status(200).send({
        'message': "Successful selled...",
        data: true
    })

}