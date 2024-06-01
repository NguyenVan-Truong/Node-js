 import express from 'express';
 import 'dotenv/config.js';
 import bodyParser from 'body-parser';
 import connectMongoDB from './connect.js';
 import router from './routes/index.js';
 const app = express();
 const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI || null;
connectMongoDB(uri);
router(app);

 app.listen(port,()=>{
    console.log('khoi tao thanh cong');
 })