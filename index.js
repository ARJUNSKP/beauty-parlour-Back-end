const express=require('express')
require('dotenv').config()
require('./connection/dbconnection')
const router=require('./Router/router')
const cors=require('cors')
const server=express()
server.use(cors())
server.use(express.json())
server.use(router)
const port =4000 || process.env.port
server.listen(port,()=>{
    console.log(`---server is running ${port} in this port `)
})