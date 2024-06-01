const express = require('express');
const router = express.Router();
const { MongoClient ,ObjectId} = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db('truonghayho');
const products = database.collection('products');


const timelog = (req,res,next)=>{
    console.log('Time: '+Date.now());
    next();
}
router.use(timelog);

const baseUrl = '/';
// danh sách + tìm kiếm
router.get(baseUrl,async(req,res)=>{
    try {
        await client.connect();
        const result = await products.find(req.query).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }finally{
        await client.close();
    }
})
// xem chi tiết
router.get(baseUrl + ':id',async(req,res)=>{
    try {
        await client.connect();
        const result = await products.find({
            _id: new ObjectId(req.params.id)
        }).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }finally{
        await client.close();
    }
})
// thêm mới
router.post(baseUrl,async(req,res)=>{

    try {
        await client.connect();
        await products.insertOne(req.body);
        res.status(204).json([])
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }finally{
        await client.close();
    }
})
// cập nhật
router.put(baseUrl +':id' ,async(req,res)=>{
    try {
        await client.connect();
        await products.updateOne(
            {_id: new ObjectId(req.params.id)},
            {
                $set: req.body
            }
        );
        res.status(204).json([]);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }finally{
        await client.close();
    }   
})
// xoá
router.delete(baseUrl +':id',async(req,res)=>{
    try {
        await client.connect();
        await products.deleteOne({
            _id: new ObjectId(req.params.id)
        });
        res.status(204).json([]);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }finally{
        await client.close();
    }
})

module.exports = router;