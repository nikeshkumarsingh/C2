const express=require("express");
const Branchdetail=require("../models/branchdetail.models");
const crudcontroller=require("./crud.controlls")
const router=express.Router();
router.get("",async(req,res)=>{
    try{
       const branchdetails=await Branchdetail.find().lean().exec();
       return res.status(200).send({branchdetails:branchdetails});
    }catch(err){
        return res.status(500).send({message:err.message});

    }
});
router.post("",crudcontroller.post(Branchdetail));

module.exports=router;