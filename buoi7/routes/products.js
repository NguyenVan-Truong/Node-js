import express from 'express';
import Product from '../schemas/product.js'
const routerProducts = express.Router();

// Middleware: cái thằng mà nó sẽ đứng ở giữa: 
//              yêu cầu ng dùng gửi lên và phía server xử lý
const timelog = (req, res, next) => {
    console.log('Time: ' + Date.now());
    next();
}
router.use(timelog);

// Định nghĩa các đường dẫn
const baseUrl = '/';

// Danh sách + tìm kiếm
router.get(baseUrl, async (req, res) => {
    let data = await Product.find();
    res.json(data); 
});

// Xem chi tiết
router.get(baseUrl + ':id', async (req, res) => {
    
});

// Thêm mới
router.post(baseUrl, async (req, res) => {
    
});

// Cập nhật
router.put(baseUrl + ':id', async (req, res) => {
    
});

// Xóa
router.delete(baseUrl + ':id', async (req, res) => {
    
});

module.exports = routerProducts