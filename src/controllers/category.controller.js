
const Category = require("../models/category.model");
exports.craeteCategory=async(req,res)=>{
    try{
        const category=await Category.create(req.body)
        res.status(201).json(category,{message:"Category created successfully",status_code:201})

    }catch(error){
        res.status(400).json({ message: error.message });
    };
    
}

exports.getAllCategory=async(req,res)=>{
    try{
        const allcategory=await Category.find()
        if(allcategory){
            res.status(200).json(allcategory,{message:"Category fetch successfully",status_code:200})
        }
        else{
            res.status(400).json({message:"category not found",status_code:400})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}