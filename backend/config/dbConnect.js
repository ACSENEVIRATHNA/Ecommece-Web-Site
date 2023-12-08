const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log("Connected Successfully");
  } catch (error) {
    console.log("database connection error: ");
  }
};

module.exports = dbConnect;
