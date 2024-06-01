import Car from "../models/Car.js"
import validatorCar from "../validation/CarRequest.js";
class CarController{
    async index(req,res){
       try {
            const data = await Car.find({}).populate('brand')
            res.json(data)
       } catch (error) {
            res.status(500).json(error);
       }
    }
    async store(req,res){
        try {
            const output = await validatorCar.validate(req.body)
            const data = await Car.create(output)
            res.json(data)
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async show(req,res){
        try {
            const data = await Car.findById(req.params.id).populate('brand')
            res.json(data)
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async update(req,res){
        try {
            const output = await validatorCar.validate(req.body)
            const data = await Car.findByIdAndUpdate(req.params.id,output,{new : true})
            res.json(data)
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async delete(req,res){
        try {
            await Car.findByIdAndDelete(req.params.id)
            res.sendStatus(204)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
export default CarController