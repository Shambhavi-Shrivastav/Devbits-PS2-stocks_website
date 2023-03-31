
module.exports = (app) => {
    require('./user.route')(app)
    require('./item.route')(app)
    require('./contact.route')(app)
    require('./portfolio.route')(app)
}

