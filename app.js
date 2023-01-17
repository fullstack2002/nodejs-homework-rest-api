const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require("dotenv").config();
const sgMail = require("@sendgrid/mail")
const nodemailer = require("nodemailer")
require("dotenv").config()

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "nodetest@meta.ua",
    pass: META_PASSWORD,
  }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "viktoriia.vinnykova@kneu.ua",
  from: "nodetest@meta.ua",
  subject: "Verify email",
  html: `<p>Verify email</p>`
}

transport.sendMail(email)
  .then(() => console.log("Email send success"))
.catch(error => console.log(error.message))

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message, })
})

module.exports = app