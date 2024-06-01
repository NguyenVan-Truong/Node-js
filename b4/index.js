const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
const multer = require("multer");
const storage = multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }

});
const upload = multer({storage : storage});


let products = [];

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/products", (req, res) => {
  res.render("products/index", {
    products: products,
  });
});
app.get("/products/create", (req, res) => {
  res.render("products/create");
});
app.post("/products/store",upload.single('img'), (req, res) => {
  let product = req.body;
  product.img = 'images/' + req.file.filename;
  console.log(product);
  products.push(product);
  res.redirect("/products");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
