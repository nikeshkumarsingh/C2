const express= require("express");
const usercontrolls= require("./controlls/user.controlls");
const savingaccountcontrolls= require("./controlls/savingaccount.controlls");
const masteraccountcontrolls= require("./controlls/masteraccount.controlls");
const fixedaccountcontrolls= require("./controlls/fixedaccount.controlls");
const branchdetailcontrolls= require("./controlls/branchdetail.controlls");
const crudcontrolls= require("./controlls/crud.controlls");
const app=express();
app.use(express.json());
app.use("/users",usercontrolls)
app.use("/savingaccount",savingaccountcontrolls)
app.use("/masteraccount",masteraccountcontrolls)
app.use("/fixedaccount",fixedaccountcontrolls)
app.use("/branchdetail",branchdetailcontrolls)
module.exports=app;