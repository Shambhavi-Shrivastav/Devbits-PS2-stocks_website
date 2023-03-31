const ContactUs = require("../models/contactus.model");

exports.contact_us = async (req, res) => {
    try {
        const data = req.body;
        const query_obj = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            mobile: data.mobile,
            description: data.description
        };
    
        const contact_us = await ContactUs.create(query_obj)
    
        return res.status(200).send({
            "message": "Question Saved Successfully...",
            "data": {
                id: contact_us._id
            }
        })
    } catch (e) {
        console.log(e);
        return res.status(401).send({
            "message": "Some Error Occured!!!",
            "data": e
        });
    }
    
}