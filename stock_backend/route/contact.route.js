
const { authToken } = require("../middleware/index");
const contactController = require("../controller/contactus.controller");

module.exports = (app) => {
    app.post("/contact-us", [authToken.verifyToken], contactController.contact_us)
}