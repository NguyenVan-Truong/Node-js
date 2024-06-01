import express from "express";
import "dotenv/config.js";
import bodyParser from "body-parser";
import connectMongoDB from "./connect.js";
import { Person, Story } from "./schema.js";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI || null;
connectMongoDB(uri);

app.get("/", async (req, res) => {
  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: "Ian Fleming",
    age: 50,
  });

  await author.save();

  const story1 = new Story({
    title: "Casino Royale",
    author: author._id, // assign the _id from the person
  });

  await story1.save();
  // that's it!
  res.send("thành công !!!")
});

app.listen(port, () => {
  console.log("khoi tao thanh cong");
});