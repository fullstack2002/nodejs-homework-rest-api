const bcrypt = requir("bcrypt")

const { User } = require("../../models/db/user")

const { HttpError } = require("../helpers")

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Emai or password invalid");
  }

  const token = "4523fdger.342534.gertgher";

  res.json({
  token,
  })
  
}

module.exports = login;