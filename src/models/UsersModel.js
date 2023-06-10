const  mongoose=require("mongoose")

const UsersSchema=mongoose.Schema(
    {
        email:{type:String,unique:true},
        firstname:{type:String},
        lastname:{type:String},
        mobile:{type:String},
        password:{type:String}

    },{timestamps:true,versionKey:false}
)
const UsersModel=mongoose.model('users',UsersSchema);

module.exports=UsersModel