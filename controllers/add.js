const Contact = require("../models/db/contact")

const add = async (req, res, next) => {
  const result = await contacts.add(req.body);

  res.status(201).json(result);
}

module.exports = add;