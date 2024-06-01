const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));

// cấu hình ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
//khai báo sử dụng multer
// SET STORAGE
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });



app.get("/", (req, res) => {
  let today = new Date();
  currentDay = today.getDay();
  let day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ Nhật";
      break;
    case 1:
      day = "Thứ Hai";
      break;
    case 2:
      day = "Thứ Ba";
      break;
    case 3:
      day = "Thứ Tư";
      break;
    case 4:
      day = "Thứ Năm";
      break;
    case 5:
      day = "Thứ Sáu";
      break;
    case 6:
      day = "Thứ Bảy";
      break;
    default:
      console.log(`error:${currentDay}`);
  }

  let listProduct = [
    {
      id: 1,
      title: "Apple Book",
      price: 3000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "anh1.jpg",
    },
    {
      id: 2,
      title: "Microsoft Book",
      price: 2000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "anh2.jpg",
    },
    {
      id: 3,
      title: "VFast Book",
      price: 1000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "anh3.jpg",
    },
  ];

  res.render("home", {
    kingday: day,
    product2: listProduct,
  });
});

// let product = [];
let listProduct = [
  {
    id: 1,
    name: "Apple Book",
    price: 3000,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "anh1.jpg",
  },
  {
    id: 2,
    name: "Microsoft Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "anh2.jpg",
  },
  {
    id: 3,
    name: "VFast Book",
    price: 1000,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "anh3.jpg",
  },
];


app.get("/create", (req, res) => {
  res.render("create");
});
app.post("/create", upload.array('image'), (req, res) => {
  const { name, price, description } = req.body;

  // Lấy tên file ảnh đã tải lên
 
  const image = req.files.map(file => file.filename);
  // Tạo ID mới cho sản phẩm
  const id = listProduct.length + 1;

  // Thêm sản phẩm mới vào danh sách
  listProduct.push({
    id,
    name,
    price: parseInt(price), // Chuyển giá thành số nguyên
    description,
    image
  });
  res.redirect("/shop");
});
app.get("/shop", (req, res) => {
  res.render("shop", { product2: listProduct });
});

app.listen(port, () => {
  console.log("khoi tạo thanh cong");
});
