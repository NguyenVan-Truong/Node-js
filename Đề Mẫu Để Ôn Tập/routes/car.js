import express from "express";
import CarController from "../controllers/CarController.js";
import { verifytoken } from "../mdw/authmdw.js";

const routesCar = express.Router();

const carcontroller = new CarController();


routesCar.use(verifytoken);
routesCar.get('/',carcontroller.index);
routesCar.get('/:id',carcontroller.show);
routesCar.post('/',carcontroller.store);
routesCar.put('/:id',carcontroller.update);
routesCar.delete('/:id',carcontroller.delete);

export default routesCar