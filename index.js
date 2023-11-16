const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
main().then((data)=>{
  console.log(data);
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let chat1 = new Chat({
  from:"neha",
  to:"priya",
  msg:"send notes",
  created_at:new Date(),
})
chat1.save().then((data)=>{
  console.log(data);
})

app.get("/",(req,res)=>{
  res.send("root is working");
});
app.get("/chats", async (req,res)=>{
  let chats = await Chat.find();
  res.render("index.ejs",{chats});
})

app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})
