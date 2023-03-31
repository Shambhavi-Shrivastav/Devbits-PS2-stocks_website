const itemController = require('../controller/item.controller')
const { authToken } = require('../middleware/index');""

module.exports = (app) => {
    app.post('/item/additem', authToken.verifyToken, itemController.add)
    // app.get('/item/getitem', [authtoken.verifyToken], itemController.getTask)
    app.post('/item/buy', authToken.verifyToken, itemController.buy_item)
    app.post('/item/sell', authToken.verifyToken, itemController.sell_item)
}