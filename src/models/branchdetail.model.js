const mongoose=require("mongoose");
const branchdetailSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        address:{type:String,required:true},
        IFSC:{type:String,required:true},
        MICR:{type:Number,required:true},
    },
    {
        timestamp:true,
    }
);
const Branchdetail=mongoose.model("branchdetail",branchdetailSchema);
module.exports=Branchdetail;