const users=require('../Models/userModel')

const ServiseBooking=(req,res)=>{
    const {uname,email,service,textContent}=req.body
    users.create({uname,email,service,textContent}).then(user=>{
        if(user){
            res.status(200).json('service Booked')
        }else{
            res.status(400).json('service not booked')
        }
    })
}

module.exports={
    ServiseBooking
}