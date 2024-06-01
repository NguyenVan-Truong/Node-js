import express from "express";
import AuthController from "../controllers/AuthController.js";

const routesAuth = express.Router();

const authController = new AuthController;

routesAuth.post('/login',authController.login);
routesAuth.post('/register',authController.register);

export default routesAuth