const mongoose=require("mongoose");
const savingaccountSchema=new mongoose.Schema(
    {
        account_number:{type:Number,required:true,unique:true},
        balance:{type:Number,rquired:true},
        interestrate:{type:Number,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }

    },
    {
        timestamps:true,
    }
);
const Savingaccount=mongoose.model("savingaccount",savingaccountSchema);
module.exports=Savingaccount;