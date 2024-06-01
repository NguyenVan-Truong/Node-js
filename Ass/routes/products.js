import express from 'express';
import ProductController from '../controller/ProductController.js';
const routerProducts = express.Router();
const productsController = new ProductController
const timelog = (req,res,next)=>{
    console.log('Time:'+Date.now());
    next();
}
routerProducts.use(timelog);

const baseUrl ="/";
routerProducts.get(baseUrl,productsController.index);
routerProducts.get(baseUrl+':id',productsController.show);
routerProducts.post(baseUrl,productsController.store);
routerProducts.put(baseUrl+':id',productsController.update);
routerProducts.delete(baseUrl+':id',productsController.delete);
export default routerProducts