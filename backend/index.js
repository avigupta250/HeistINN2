const express=require("express");
const connectDB=require("./config/connectDB")
const app =express();
require("dotenv").config();


const PORT=process.env.PORT||4000;




app.use(express.json())


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
  });
  
  app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage Dude</h1>`);
  });


  // connectDB();