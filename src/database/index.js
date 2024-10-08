import Sequelize from "sequelize";
import mongoose from "mongoose";
import User from "../app/models/User";
import Product from "../app/models/Product";
import configDatabase from "../config/database";
import Category from "../app/models/Category";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase.url);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://mongo_codeburger:mongo@codeburger_mongo:27017",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}
export default new Database();
