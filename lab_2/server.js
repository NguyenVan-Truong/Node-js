const express = require('express')
const app = express()
const port = 3000
const multer= require('multer');

//khai bao template engine
app.set('views', './labs/lab_2/view');
app.set('view engine', 'ejs');
app.use(express.static('./labs/lab_2/public'))

app.use(express.urlencoded({
  extended: true,
}));

//khai bao route
//trang chu
app.get('/', (req, res) => {
  res.render('trang-chu', { className: className });
})


//trang gioi thieu
app.get('/gioi-thieu', (req, res) => {
  res.send(`
      <h2>trang gioi thieu</h2>
      <button><a href="/">quay lai trang chu</a></button>
  `);
})

//khai bao ham upload anh
const storage =multer.diskStorage({
  //khai bao foder luu tru anh
  destination: (req, file, cb)=>{
    cb(null,'./labs/lab_2/public/image');
  },
  //ten file anh
  filename: (req, file , cb) =>{
    cb(null, file.originalname);
  }
})
let uploadFile= multer({storage: storage});



// san pham
const products = [
  {
    id: 1,
    title: 'Apple Book',
    price: 3000,
    description: "A very interesting book about so many even more interesting things!",
    imageURL: "image.png",
  },
  {
    id: 2,
    title: 'Microsoft Book',
    price: 2000,
    description: "A very interesting book about so many even more interesting things!",
    imageURL: "image.png",
},
{
    id: 3,
    title: 'VFast Book',
    price: 1000,
    description: "A very interesting book about so many even more interesting things!",
    imageURL: "image.png",
}
];

let className = "WEBSITE Bán Hàng";



//trang danh sach san pham

app.get('/list-products', (req, res) => {
  res.render('trang-sanpham', { className: className, products: products });
});



//trang chi tiet san pham
app.get('/product/:id', (req, res) => {
  const id_pro = req.params.id;
  const pro = products.find(data => data.id == id_pro);
  res.send(`
      <h1>Chi Tiết Sản Phẩm</h1>
      <article class="card product-item  p-3 text-center m-3 ">
              <header class="">
              <h1 class="mb-3 ">${pro.title}</h1>
              </header>
              <div class="card__image">
              <img src="image/image.png" alt="A Book">
              </div>
              <div class="card__content">
              <h2 class="mt-3 ">$${pro.price}</h2>
              <p class="product__description">${pro.description}</p>
              </div>
          </article><br> <br>
      <button><a href="/" class="btn btn-primary">Quay Lại Trang Chủ</a></button>
      <button><a href="/list-products" class="btn btn-primary">Quay Lại Trang Sản Phẩm</a></button>
  `);
});


// //trang them san pham san pham




//trang them san pham san pham - post



app.get('/add-product', (req, res) => {
  res.render('trang-them');
});



app.post('/add-product',uploadFile.single('image'), (req, res) => {
  console.log(req.body);
  let file =req.file;
  let img=file.filename;

  const new_pro = {
    id: products.length + 1,
    title: req.body.pro_name,
    price: Number(req.body.pro_price),
    description: req.body.description,
    imageURL: img,
  }
  products.push(new_pro);
  res.redirect('/list-products');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})