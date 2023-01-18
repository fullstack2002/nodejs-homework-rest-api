const { User } = require("../../models/db/user")

const {HttpError} = require("../../helpers")

const verify = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) {
    throw HttpError(404);
  }
  await User.findByIdAndUpdate(user._id, { verify: true, verificationCode: "" });

  req.json({
    message: "Email verify sucess"
  })
}

module.exports = verify;