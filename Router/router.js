const express=require('express')
const LogicPath=require('../controler/Logic')

const router=express.Router()
router.post('/express/service/booking',LogicPath.ServiseBooking)


module.exports=router