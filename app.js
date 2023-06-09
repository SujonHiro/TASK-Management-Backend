const express=require("express")
//const router=require("./src/routes/api")
const app=express()
const helmet=require("helmet")
const mongoose=require("mongoose")
const cors=require("cors")
const hpp=require("hpp")
const mongoSanitize=require("express-mongo-sanitize")
const rateLimit=require("express-rate-limit")

//Security
app.use(cors())
app.use(hpp())
app.use(mongoSanitize())
app.use(helmet())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb"}))

//Rate Limiting
const limiter=rateLimit({windowMs:15*60*1000,max:300})
app.use(limiter);

//Database Connection

let URI="mongodb+srv://<username>:<password>@cluster0.g8le02t.mongodb.net/taskmanag"
let Option={user:'sujonhowlader',pass:'sujonhowlader',autoIndex:true}

mongoose.connect(URI,Option).then((res)=>{
console.log("Success")
}).catch((err)=>{
    console.log(err)
})

//app.use("api/v1",router)

app.use("*",(req,res)=>{
    res.status(404).json({status:'Fail',data:"Not Found"})
})

module.exports=app