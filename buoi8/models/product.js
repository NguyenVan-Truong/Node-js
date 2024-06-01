import mongoose  from "mongoose";
const productschema = new mongoose.Schema({
    name : String,
    sku : String,
    brand:{
        name: String,
        img: String
    },
    comments:[{
        body : String,
        date: Date
    }]
})
export default mongoose.model('Product',productschema);