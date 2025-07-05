const User = require("../models/user");

const jwt =require('jsonwebtoken');
const authMiddlware = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];
    if (!token){
        return res.status(401).json({message: "Unauthrorized access"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "Invalid token"});
        }
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        req.user = user;
        next();

    }
    catch(error){
        console.log(error);
        return res.status(500).json({error: "server error"});
    }
}

module.exports = authMiddleware;