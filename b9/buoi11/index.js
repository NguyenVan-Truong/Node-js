import express from "express";
import "dotenv/config";
import vine from "@vinejs/vine";

const app = express();
const port = process.env.PORT || 3000;

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
  console.log("Khởi động server thành công!");
});