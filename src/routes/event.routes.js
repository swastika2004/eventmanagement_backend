const express=require('express')
const {createevent}=require('../controllers/event.controller')
const router=express.Router()
 router.post('/create-event',createevent)

 module.exports = router;

 router.post("/create-event", createevent);
 router.get("/getAllEvent",getAllEvent);
 router.put("/updateEvent/:id", updateEvent);
 router.delete("/deleteEvent/:id", deleteEvent);
 
 module.exports = router;