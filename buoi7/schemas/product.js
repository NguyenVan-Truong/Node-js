
import mongoose from 'mongoose';
const { schema} = mongoose;

const productschema = new schema({
    name : string,
    sku : string,
    brand:{
        name: string,
        img: string
    },
    comments:[{
        body : string,
        date: date
    }]
})
export default mongoose.model('Product',productschema);