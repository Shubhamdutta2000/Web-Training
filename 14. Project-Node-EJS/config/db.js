var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDb Connected Successfully: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

