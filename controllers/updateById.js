const contact = require("../models/db/contact")

const HttpError = require("../helpers")

const updateById = async(req, res, next)=> {
    const {id} = req.params;
    // const result = await contacts.updateById(id, req.body);
    // if(!result) {
    //     throw HttpError(404, "Not found")
    // }

    // res.json(result)
}

module.exports = updateById