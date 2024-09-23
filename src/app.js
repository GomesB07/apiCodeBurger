import express from "express";
import routes from "./routes";
import { resolve } from "path";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import "./database";
class App {
  constructor() {
    this.app = express();
    this.app.use(
      cors({
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
        allowedHeaders: "Authorization, Content-Type",
        credentials: true,
      })
    );

    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );

    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
