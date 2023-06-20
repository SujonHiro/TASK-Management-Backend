const UsersModel=require('../models/UsersModel')
const jwt=require('jsonwebtoken')
exports.registration=async(req,res)=>{
    let reqBody=req.body;
    try{
        let results = await UsersModel.create(reqBody)
        res.status(200).json({status:"Success",data:results})
    }catch (e){
        res.status(200).json({status:'Fail',data:e})
    }
}
 exports.login=async(req,res)=>{
    try {
        let reqBody=req.body;
        let results = await UsersModel.find(reqBody).count("total")
        if(results===1){
            //token issue

            let payload={
                exp:Math.floor(Date.now()/1000)+(24*60*60),
                data:req.body['email']
            }
            let token=jwt.sign(payload,'secretKey1231321Sujon',{'algorithm':"HS256"})
            res.status(200).json({status:"Success",data:token})
        }

    } catch (error) {
        res.status(200).json({status:'Fail',data:error})
    }
 }

 //Profile Details

exports.profileDetails=async(req,res)=>{
    try {
        let email=req.headers['email']
        //console.log('Email:'+ email);
        let results= await UsersModel.find({email:email})
        res.status(200).json({status:'Success',data: results})
        
    } catch (error) {
        res.status(200).json({status:'Fail',data:error})
    }
}
