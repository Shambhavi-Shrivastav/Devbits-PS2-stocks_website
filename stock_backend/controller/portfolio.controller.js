
const Portfolio = require("../models/portfolio.model");


exports.userPortfolio = async (req, res) => {
    var user_id = req.userId;
    var body = req.body;

    const portfolio_obj = await Portfolio.find({
        user_id: user_id
    });

    if (!portfolio_obj) {
        return res.status(200).send({
            'message': 'No items in portfolio!!!',
            'data': []
        })
    }

    


    return res.status(200).send({
        "message": "Done ....",
        data: body
    });

}