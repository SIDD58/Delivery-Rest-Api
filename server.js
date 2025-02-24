// npm i express mongoose and npm i -dev dotenv for environment files
// .env file will basically have environment varaibles store so when we pass environment variables 
// do not create any issue
// confid dotenv means our process environemnt variable have now access to 
// variables defined in .env file
require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
mongoose.set('debug', true);

// connect to databas
mongoose.connect(process.env.DATABASE_URL);
const db=mongoose.connection;
db.on('error',()=>{console.log("Some error occured")});
db.once('open',()=>{console.log("Connected to database")});
const app=express();

// before this databse is connected and ready
// here we will do our oruting work 

app.use(express.json());
//Deliveries routes
const deliveryRoute=require("./routes/delivery");
app.use("/deliveries",deliveryRoute);



app.listen(process.env.PORT,()=>{
    console.log(`Server is started at PORT ${process.env.PORT}`)
});
