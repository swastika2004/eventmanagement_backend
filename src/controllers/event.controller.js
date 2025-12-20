const Event = require("../models/events.model");
export const createevent=async(req,res)=>{
    try{
        const event=await Event.create(req.body)
        res.status(201).json(event,{message:"Event created successfully",status_code:201})

    }catch(error){
        res.status(400).json({ message: error.message });
    };
    
}
exports.getAllEvent=async(req,res)=>{
    try{
        const allevent=await Event.find()
        if(all){
            res.status(200).json({events:allevent,message:"Event fetch successfully",status_code:200})
        }
        else{
            res.status(400).json({message:"Event not found",status_code:400})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.updateEvent=async(req,res)=>{
  try{
    const updatedEventData=await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEventData) {
      return res.status(404).json({
        message: "event not found",
      });
    }
    res.status(200).json({
      category: updatedEventData,
      message: "event updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating event",
      error: error.message,
    });
  } 
};
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Category.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }
    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Event",
      error: error.message,
    });
  }
};