const  mongoose=require("mongoose")

const UsersSchema=mongoose.Schema(
    {
        email:{type:String,unique:true},
        title:{type:String},
        description:{type:String},
        status:{type:String}

    },{timestamps:true,versionKey:false}
)
const UsersModel=mongoose.model('users',UsersSchema);

module.exports=UsersModel