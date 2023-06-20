const jwt=require('jsonwebtoken')

module.exports=async(req,res,next)=>{
    try {
        let Token=req.headers['token']
         await jwt.verify(Token,'secretKey1231321Sujon',(err,decoded)=>{
            if(err){
                res.status(200).json({status:'Fail',data:err})
            }else{
                let email=decoded['data']
                req.headers.email=email
                next()
            }
        })
    } catch (error) {
        res.status(200).json({status:'Fail',data:error})
    }
}