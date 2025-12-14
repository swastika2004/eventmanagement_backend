const express=require('express')
const {createevent}=require('../controllers/event.controller')
const router=express.Router()
 router.post('/create-event',createevent)

 module.exports = router;