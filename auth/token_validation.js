const { verify}= require("jsonwebtoken");

module.exports ={
    checkToken: (req,res,next) => {
        let token = req.get("authorization");
        if(token){
           token = token.slice(7);
           verify(token,"asdasd",(err,decoded) => {
               if(err){
                   res.json({
                       message: "invalid token"
                   })
               }
               else{
                   next();
               }
           });
        }
        else{
            res.json({
                message: "access denied! unauthorized user "
            })
        }
    }
}