const mongoose=require("mongoose");
const fixedaccountSchema= new mongoose.Schema(
    {
        account_number:{type:Number,required:true},
        balance:{type:Number,required:true},
        interestrate:{type:Number,required:true},
        maturityDate:{type:String,required:true}
    },
    {
        timestamps:true,
    }
);
const Fixedaccount=mongoose.model("fixedaccount",fixedaccountSchema);
module.exports=Fixedaccount;