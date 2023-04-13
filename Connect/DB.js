import mongoose from "mongoose";

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgnrv.mongodb.net/backend?retryWrites=true&w=majority`
    );

    mongoose.connection.once("open", () => {
      console.log("MongoDB has been Connected");
    });

    mongoose.connection.on("error", () => {
      console.log("Not able to Connect with Mongo");
    });
  }
}

export default Mongo;
