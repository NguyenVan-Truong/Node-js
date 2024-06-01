import jwt from "jsonwebtoken";
export const verifytoken= (req, res , next) =>{
    try {
        const bearerToken = req.headers['authorization'];
        if(bearerToken != undefined){
            const token = bearerToken.split("")[1];
            jwt.verify(token, process.env.JWT_SECRET);
            return next()
        }
        throw new Error("loi")
    } catch (error) {
        res.status(400).json("ban khon co quyen")
    }
}