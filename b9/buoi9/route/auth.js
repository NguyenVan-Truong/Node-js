import express from "express";
import AuthController from "../controllers/authcontroller.js";
const routerAuth = express.Router();
const authController = new AuthController();
// Middleware: cái thằng mà nó sẽ đứng ở giữa:
//              yêu cầu ng dùng gửi lên và phía server xử lý

// Định nghĩa các đường dẫn
routerAuth.post("/login", authController.login);
routerAuth.post("/register", authController.register);

// module.exports = routerAuth
export default routerAuth;
