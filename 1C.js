const express=require('express');
const app=express();
const PORT=3000;
app.use((req,res,next)=>{
    console.log('Middleware 1:Request received');
    console.log('URL:',req.url);
    console.log('Method:',req.method);
    next();
});
const checkTime=(req,res,next)=>{
    const hour=new Date().getHours();
    if(hour<15||hour>6){
        res.send('Access allowed only between 6 AM and 10 PM');}
    else{
        next();
    }
};
app.get('/home',checkTime,(req,res)=>{
    res.send('Welcome to Home Page');
});
app.get('/about',(req,res)=>{
    res.send('This is About Page');
});
app.listen(PORT,()=>{
    console.log(`Server ruuning at http://localhost:${PORT}`);
});
