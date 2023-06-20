const jwt=require('jsonwebtoken')

module.exports=async(req,res,next)=>{
    try {
        const token = req.headers['token'];
        const decoded = await jwt.verify(token, 'secretKey1231321Sujon');
        const email = decoded['data'];
        req.headers.email = email;
        next();
    } catch (error) {
        res.status(200).json({status:'Fail',data:error})
    }
}