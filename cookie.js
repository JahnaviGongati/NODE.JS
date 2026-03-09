const express=require("express");
const cp=require("cookie-parser");
const app=express();
app.use(cp());
app.get("/",(req,res)=>{
    res.send("Hello!");
});
app.get("/setcookie",(req,res)=>
{
    res.cookie("username","Brunda");
    res.send("Cookie created");
});
app.get("/getcookie",(req,res)=>{
    if(req.cookies.username){
        res.send("Cookie value:"+req.cookies.username);
    
    }
    else{
        res.send("No cookie found!");
}
});
app.get("/clearcookie",(req,res)=>{
    res.clearCookie("username");
    res.send("Cookie cleared!");
});
app.listen(1000,()=>console.log("Cookie server running on http://localhost:1000"));