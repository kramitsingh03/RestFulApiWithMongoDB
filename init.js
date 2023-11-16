const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

main().then(()=>{
  console.log("connection succesful");
})
.catch(err => console.log("error"));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let chats = [{
  from:"neha",
  to:"priya",
  msg:"send notes",
  created_at:new Date(),
},
{
    from:"nehalumar",
    to:"priya sahi",
  msg:"send number",
  created_at:new Date(),
},{
    from:"neha kakkar",
  to:"priyanka",
  msg:"send notes",
  created_at:new Date(),
}


];

Chat.insertMany(chats);
