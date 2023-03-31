const User = require('../models/user.model')
const jwt = require("jsonwebtoken")
const { secreatkey } = require('../configs/user_auth_config')
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {

    let name = req.body.name
    let emailID = req.body.emailID
    let password = req.body.password

    const userObj = {
        name: name,
        emailID: emailID,
        password: bcrypt.hashSync(password, 10),
        money: 1000000
    }

    const userCreated = await User.create(userObj)

    const response = {
        name: userCreated.name,
        emailID: userCreated.emailID,
        createdAt: userCreated.createdAt,
        updatedAt: userCreated.updatedAt,
        money: userCreated.money
    }

    res.status(200).send(response)
}

exports.signin = async (req, res) => {


    let curr_emailID = req.body.emailID
    let curr_password = req.body.password

    const user = await User.findOne({ emailID: curr_emailID })
    // console.log(user)
    if (!user) {
        return res.status(401).send({ "message": "User does not exists" })
    }
    const password_check = bcrypt.compareSync(curr_password, user.password)

    if (!password_check) {
        res.status(401).send({ "message": "Invalid password" })
    }

    const webtoken = jwt.sign({ id: user._id }, secreatkey, { expiresIn: 600 })

    const response = {
        name: user.name,
        emialID: user.emailID,
        id: user._id,
        webtoken: webtoken,
        money: user.money
    }

    res.status(200).send(response)
}

