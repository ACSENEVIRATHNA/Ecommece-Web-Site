const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandle");

// express app
const app = express();
app.use(express.json());

//routes
app.use("/api/user", authRouter);

// middleware
app.use(notFound);
app.use(errorHandler);
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
// Connect to database
dbConnect();

app.use("/", (req, res) => {
  res.send("ajsshfuiarsg");
});
