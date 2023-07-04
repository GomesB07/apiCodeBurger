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
    this.mongo()
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:HnZPvGjsoBlu3YZtN271@containers-us-west-97.railway.app:6798/railway');
    models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));
  }

  mongo(){
    this.mongoConnection = mongoose.connect('mongodb://mongo:JzX1q5m6qWh1RR6NcJ6x@containers-us-west-20.railway.app:7087', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
}
export default new Database();
