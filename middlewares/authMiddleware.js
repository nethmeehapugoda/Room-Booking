
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async(req ,res , next) =>{
    let token = req.headers.authorization?.split("")[1];
    if(token){
        return res.status(401).json({message:"Unauthorized no token"});
    }
    try{
        const decoded = jwt.verify(token ,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).Select('-password');
        if(!req.user){
            return res.status(401).json({message:"Unauthorizesd no user found"});
        }
        next();
    }
    catch(error){
        console.error(error);
        res.status(401).json({message:"Unauthorized, invalid token"});
    }
    


};

const admin =(req , res , next)=>{
    if(req.user && req.user.role === 'admin'){
        next();

    }
    else{
        res.status(401).json({message:"Forbidden, not an admin"});
    }
};
export { protect , admin };
