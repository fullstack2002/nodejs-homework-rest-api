const Contact = require("../models/db/contact")

const HttpError = require("../helpers")

const removeById = async(req, res, next)=> {
    // const {id} = req.params;
    // const result = await contacts.removeById(id);
    // if(!result) {
    //     throw HttpError(404, "Not found")
    // }

    // res.json({
    //     message: "Delete success"
    // })
}

module.exports = removeById;