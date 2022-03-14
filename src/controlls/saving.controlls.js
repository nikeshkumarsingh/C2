const express=require("express");
const Savingaccount=require("../models/savingaccount.models");
const crudcontroller=require("./crud.controlls")
const router=express.Router();
router.get("",async(req,res)=>{
    try{
       const savingaccounts=await Savingaccount.find().populate("user").lean().exec();
       return res.status(200).send({savingaccounts:savingaccounts});
    }catch(err){
        return res.status(500).send({message:err.message});

    }
});
router.post("",crudcontroller.post(Savingaccount));

module.exports=router;