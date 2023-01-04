const { Schema, model } = require("mongoose");
const Joi = require("Joi");

const {handleMongooseError} = require("../../helpers")

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

contactSchema.post("save", handleMongooseError)

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favourite: Joi.boolean()
})

const Contact = model("contact", contactSchema)

module.exports = Contact;