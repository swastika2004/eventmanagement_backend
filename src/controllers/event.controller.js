
const Category = require("../models/category.model");
export const craeteCategory=async(req,res)=>{
    try{
        const category=await Category.create(req.body)
        res.status(201).json(category,{message:"Category created successfully",status_code:201})

    }catch(error){
        res.status(400).json({ message: error.message });
    };
    
}