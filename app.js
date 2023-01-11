const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require("dotenv").config();
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const contacts = [];

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
})

const upload = multer({
  storage: multerConfig,
})

app.get("/api/contacts", (req, res) => {
  res.json(contacts);
})

const contactsDir = path.join(__dirname, "public", "contacts");
app.post("/api/contacts", upload.single("cover"), async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(contactsDir, originalname);
  await fs.rename(tempUpload, resultUpload);
})

app.listen(2000);

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

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