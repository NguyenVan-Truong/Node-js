import express from "express";
import 'dotenv/config.js';
import connectMongoDB from './connect.js';
import routeProducts from './routes/products.js';

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI || null;
connectMongoDB(uri);

app.use('/api/v1/products',routeProducts);
app.listen(port,()=>{
    console.log('khoi taoj thanh cong');
})