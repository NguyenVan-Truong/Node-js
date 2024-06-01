import jwt from "jsonwebtoken"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import validatorRegister from "../validation/AuthRegister.js"
import validatorLogin from "../validation/AuthLogin.js"
class AuthController{
    async login(req ,res ){
        try {
            const output = await validatorLogin.validate(req.body);

            const user = await User.findOne({ email : output.email})
            if(user){
                const match = await bcrypt.compare(output.password, user.password)
                if(match){
                    const token = jwt. sign({user : user},process.env.JWT_SECRET,{expiresIn : '1h'});
                    res.json(token)
                }
                throw "Password | User not ok"
            }
            throw "User not found !"
        } catch (error) {
            res.status(500).json(error)   
        }
    }
    async register(req ,res ){
        try {

            const output = await validatorRegister.validate(req.body)
            let data ={
                email : output.email,
                password : output.password,
            }

            const salt = await bcrypt.genSaltSync(12)
            data.password= await bcrypt.hashSync(data.password,salt)
            const user =await User.create(data)
            const token = jwt. sign({user : user},process.env.JWT_SECRET,{expiresIn : '1h'});
            res.json(token)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
export default AuthController