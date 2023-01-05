// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
let text1=[];
let text2=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  console.log(req.body);
  res.render('list',{title:"hello",content:text1});
});
app.post("/",function(req,res){
  var item=req.body.value1;
  text1.push(item);
  res.redirect("/");
});
app.post("/work",function(req,res)
{
  console.log(req.body);
})
app.get("/",function(req,res){
  res.redirect("/work");
});
app.listen(3000,function(){
  console.log("server connected on port 3000");
});
