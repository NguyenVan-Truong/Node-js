import express from "express"
import AuthBook from "../controllers/authController.js"
const routerAuth = express.Router()
const authController = new AuthBook()

routerAuth.post('/login' , authController.login)
routerAuth.post('/register' , authController.register)

export default routerAuth