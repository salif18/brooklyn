//importation du module jwt 
const jwt = require('jsonwebtoken')
const dotenv = require(dotenv)
dotenv.config()
//configuration
module.exports =(req,res,next)=>{
   try{
       const token = req.headers.authorization.split(' ')[1]
       const decodedToken = jwt.verify(token,`${process.env.TOKEN_KEY_SECRET}`)
       const userId = decodedToken.userId
       req.auth={
        userId:userId
       }
       next();
   }catch(e){
    return res.status(401).json({
        msg:'no auth'
    })
   }
}