import express from "express"
import BookController from "../controllers/bookController.js"
import { verifytoken } from "../mdw/authMdw.js"
const routerBook = express.Router()
const bookController = new BookController()

routerBook.use(verifytoken)
routerBook.get('/' , bookController.index)
routerBook.get('/:id' , bookController.show)
routerBook.post('/' , bookController.store)
routerBook.put('/:id' , bookController.update)
routerBook.delete('/:id' , bookController.delete)

export default routerBook