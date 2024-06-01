import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import connectDB from "./connect.js";
import route from "./routes/index.js";
import Books from "./models/Books.js";



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const uri = process.env.MONGO_URI
connectDB(uri)
route(app)
Books.create()


app.listen(port, () => {
  console.log("Khởi động server thành công!");
});
