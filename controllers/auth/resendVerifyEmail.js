const { User } = require("../../models/db/user")

const {HttpError, sendEmail} = require("../../helpers")

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify) {
    throw HttpError(404)
  }

  await sendEmail(verificationCode);

  res.json({
    message: "Verify email resend"
  })
}

module.exports = resendVerifyEmail;