import { Router } from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";
import CategoryController from "./app/controllers/CategoryController";
import OrderController from "./app/controllers/OrderController";

import authMiddlewares from "./app/middlewares/auth";
const upload = multer(multerConfig);
const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddlewares);

routes.post("/products", upload.single("file"), ProductController.store);
routes.put("/products/:id", upload.single("file"), ProductController.update);
routes.get("/products", ProductController.index);

routes.post("/categories", upload.single("file"), CategoryController.store);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);
routes.get("/categories", CategoryController.index);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

export default routes;
