const express=require('express.js')
const router=express.Router()
const userController=require('../controllers/userController')

router.post('/create',userController.createUser)


module.exports=router