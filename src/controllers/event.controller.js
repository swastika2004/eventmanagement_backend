const Event = require("../models/events.model");
export const createevent=async(req,res)=>{
    try{
        const event=await Event.create(req.body)
        res.status(201).json(event,{message:"Event created successfully",status_code:201})

    }catch(error){
        res.status(400).json({ message: error.message });
    };
    
}