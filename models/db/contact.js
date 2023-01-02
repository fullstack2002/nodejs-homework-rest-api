const { Schema } = require("mongoose");
const { SChema, model } = require("monogoose");

const contactSchema = new Schema({
  title: String,
  author: String,
})

const Contact = model("contact", contactSchema)

module.exports = Contact;