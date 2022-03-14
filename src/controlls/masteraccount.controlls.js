const express=require("express");
const Masteraccount=require("../models/savingaccount.models");
const crudcontroller=require("./crud.controlls")
const router=express.Router();
router.get("",async(req,res)=>{
    try{
       const masteraccounts=await Masteraccount.find().populate("savingaccount").lean().exec();
       return res.status(200).send({masteraccounts:masteraccounts});
    }catch(err){
        return res.status(500).send({message:err.message});

    }
});
router.post("",crudcontroller.post(Masteraccount));

module.exports=router;