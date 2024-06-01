import express from "express";
import UserController from "../controllers/usercontroller.js";
import { verifyToken } from "../helper.js";
const routerUsers = express.Router();
const usersController = new UserController();
// Middleware: cái thằng mà nó sẽ đứng ở giữa:
//              yêu cầu ng dùng gửi lên và phía server xử lý
// const timelog = (req, res, next) => {
//   console.log("Time: " + Date.now());
//   next();
// };
// routerUsers.use(timelog);
routerUsers.use(verifyToken);
// Danh sách + tìm kiếm
routerUsers.get("/", usersController.index);
routerUsers.get(":id", usersController.show);
// Thêm mới
routerUsers.post("/", usersController.store);
// Cập nhật
routerUsers.put(":id", usersController.update);
// Xóa
routerUsers.delete(":id", usersController.delete);
// module.exports = routerusers

export default routerUsers;
