import express from 'express';
import ProductController from '../controller/ProductController.js';
const routerProducts = express.Router();
const productscontroller = new ProductController
// Middleware: cái thằng mà nó sẽ đứng ở giữa: 
//              yêu cầu ng dùng gửi lên và phía server xử lý
const timelog = (req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
}
routerProducts.use(timelog);

// Định nghĩa các đường dẫn
const baseUrl = '/';

// Danh sách + tìm kiếm
routerProducts.get(baseUrl, productscontroller.index );

// Xem chi tiết
routerProducts.get(baseUrl + ':id', productscontroller.show);

// Thêm mới
routerProducts.post(baseUrl, productscontroller.store);

// Cập nhật
routerProducts.put(baseUrl + ':id', productscontroller.update) ;

// Xóa
routerProducts.delete(baseUrl + ':id',  productscontroller.delete);


// module.exports = routerProducts
export default routerProducts