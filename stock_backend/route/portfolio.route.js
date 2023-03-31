
const portfolio = require('../controller/portfolio.controller');
const { authToken } = require('../middleware/index');

module.exports = (app) => {
    app.get('/portfolio', authToken.verifyToken, portfolio.userPortfolio)
}