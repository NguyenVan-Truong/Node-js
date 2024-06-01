import bcrypt from "bcryptjs"
import Auth from "../models/Auth.js"
import jwt from "jsonwebtoken"
import authValidate from "../validation/authValidate.js"
class AuthBook {
    async login(req , res ){
        try {
            const output = await authValidate.validate(req.body)
            const user = await Auth.findOne({email : output.email})
            if(user){
                const match = await bcrypt.compare(output.password , user.password)
                if(match){
                    const token = jwt.sign({user : user} , process.env.JWT_SECRET , {expiresIn : "1h"})
                    res.json(token)
                }
                throw "Lỗi"
            }
            throw "Lỗi"
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async register(req , res ){
        try {
            const output = await authValidate.validate(req.body)
            let data ={
                email : output.email,
                password : output.password,
            }
            const salt = await bcrypt.genSaltSync(12)
            data.password = await bcrypt.hashSync(data.password , salt)
            const user = await Auth.create(data)
            const token = jwt.sign({user : user} , process.env.JWT_SECRET , {expiresIn : "1h"})
            res.json(token)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
export default AuthBook