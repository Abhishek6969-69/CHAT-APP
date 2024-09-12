import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authmiddleware =  (req, res, next) => {
   

    
    const token = req.header("Authorization")?.split(' ')[1];

  
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
      
        const decoded = jwt.verify(token, process.env.secret); // Ensure your environment variable name is correct

        if (!decoded) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

      console.log(decoded.userid);
        req.userid = decoded.userid;

        
        next();
    } catch (err) {
        
        console.error("Token verification failed:", err.message);
        return res.status(401).json({ msg: "Token is not valid" });
    }
};

export default authmiddleware;
