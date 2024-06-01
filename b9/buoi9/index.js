import express from "express";
import "dotenv/config.js";
import bodyParser from "body-parser";
import connectMongoDB from "./connect.js";
import router from "./route/index.js";
import vine from "@vinejs/vine";
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI || null;
connectMongoDB(uri);
router(app);



app.get("/", async (req, res) => {
  try {
    const schema = vine.object({
      name: vine.string(),
      email: vine.string().email(),
      website: vine.string().url(),
      comment: vine.string(),
      gender: vine.string().in(["co", "khong", "tuy"])
    });
  
    const data = {
      name: "Truong",
      email: "truongha@gmail.com",
      website: "https://vinejs.dev/docs/error_reporter",
      comment: "day la comment",
      gender: "co"
    };    
  
    const validator = vine.compile(schema)
    const output = await validator.validate(data)
    // const output = await validator.validate(req.body)
  
    res.json(output);
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, () => {
  console.log("khoi tao thanh cong");
});
