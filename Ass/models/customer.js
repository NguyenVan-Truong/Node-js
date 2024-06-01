import  mongoose  from "mongoose";
// const Schema = mongoose.Schema;
const customerschema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    is_vip:{
        type: Boolean,
        default : 0,
    }
})
export default mongoose.model('Product',customerschema)