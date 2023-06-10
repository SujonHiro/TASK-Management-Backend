const UsersModel=require('../models/UsersModel')

exports.registration=async(req,res)=>{
    let reqBody=req.body;
    try{
        let results = await UsersModel.create(reqBody)
        res.status(200).json({status:"Success",data:results})
    }catch (e){
        res.status(200).json({status:'Fail',data:e})
    }
}