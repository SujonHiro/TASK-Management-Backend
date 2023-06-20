const express=require("express")
const usersController=require("../controllers/UsersController")

const router=express.Router()

router.post('/registration',usersController.registration)
router.post('/login',usersController.login)

module.exports=router