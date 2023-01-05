//jshint esversion:6
const express = require("express");
const bodyParse = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://admin-varsha:varsha123@cluster0.oyyo7nr.mongodb.net/DB5")
// mongoose.connect("mongodb://localhost:27017/DB5");

const Schemanew= new mongoose.Schema({
  name:String
});
const Item = new mongoose.model("Item",Schemanew);
const item1=new Item({
  name:"type something add + to add it to todo list"
});
const item2=new Item({
  name:"click checkbox to delete item from todolist"
})
const arr=[item1,item2];

// Item.insertMany(arr,function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("success");
//   }
// });
app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({
  extended: true
}));
app.use(express.static("public"))
app.get("/", function(req, res) {
  var todaywhatday = date.getdate();
  Item.find({},function(err, content) {
    if (content.length==0) {
      Item.insertMany(arr, function(err) {
        if (!err) {
          console.log("successfully inserted");
        }
      });
      res.redirect("/");
    }
    else {
      res.render('list', {listtitle: todaywhatday,newitems: content});
    }
  });
});
app.post("/", function(req, res) {
  const itemnew = req.body.value1;
  const itemn = new Item({
    name: itemnew
  });
  itemn.save();
    res.redirect("/");
});
app.post("/delete", function(req, res) {
  const checkvalue = req.body.checkbox;
  console.log(checkvalue);

  Item.findByIdAndRemove(checkvalue, function(err) {
    if (!err) {
      console.log("successfully deleted");
    }
    res.redirect("/");
  });
  });


app.listen(process.env.PORT || 3000, function() {
  console.log("server connected on port 3000");
});
