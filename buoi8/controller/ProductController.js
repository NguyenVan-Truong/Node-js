import Product from "../models/product.js"
class ProductController {
    // lay danh sach
    // route :
    //   path : api/v1/products
    //   method : get 
    async index(req,res){
        try {
            const data = await Product.find(req.query);
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }   
    // xem chi tiet
    // route :
    //   path : api/v1/products/:id
    //   method : get 
    async show(req,res){
        try {
            const data = await Product.findById(req.params.id);
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    // them
    // route :
    //   path : api/v1/products/:id
    //   method : post 
    async store(req,res){
        try {
            const data = await Product.create(req.body);
            res.json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    // sua
    // route :
    //   path : api/v1/products/:id
    //   method : update 
    async update(req,res){
        try {
            let data = await Product.findByIdAndUpdate(req.params.id, req.body);
        
            res.json(data);
          } catch (error) {
            res.status(500).json(error)
          }
    }
    // xoa
    // route :
    //   path : api/v1/products/:id
    //   method : delete 
    async delete(req,res){
        try {
             await Product.findByIdAndDelete(req.params.id);
        
            res.json(data);
          } catch (error) {
            res.status(500).json(error)
          }
    }


}
export default ProductController