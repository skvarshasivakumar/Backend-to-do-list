const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var texty=["buy food","cook food","eat food"];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  var date=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"};
  var daytoday=date.toLocaleDateString("en-US",options);
  res.render('list',{today:daytoday,newitems:texty})
});
app.post("/",function(req,res){
  texty.push(req.body.text1);
  res.redirect("/")
});
app.listen(3000,function(){
  console.log("server started at port 3000");
});
