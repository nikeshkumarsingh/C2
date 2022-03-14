//"mongodb+srv://nike:nike@cluster0.lpebv.mongodb.net/dbsdata?retryWrites=true&w=majority"
const app =required("./index");
const connect=required("./config/db");
app.listen(5000,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err);
    }
    console.log("listening 5000")
})