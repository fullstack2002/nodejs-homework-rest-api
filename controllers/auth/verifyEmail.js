const {sendEmail} = require("../../helpers")

const verifyEmail = async (User, verificationCode) => {
  const mail = {
  to: email,
  subject: "Verify your email",
  html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email</a>`
}
  await sendEmail(verifyEmail);
}
  
module.exports = verifyEmail;