const mongoose=require("mongoose");
const masteraccountSchema= new mongoose.Schema(
    {
     savingaccountId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"savingaccount",
         required:true,
     }   
    },
    {
        timestamps:true,
    }
);
const Masteraccount=mongoose.model("masteraccount",masteraccountSchema);
module.exports=Masteraccount;