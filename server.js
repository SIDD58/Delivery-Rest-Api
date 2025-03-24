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
// mongoose.connect(process.env.DATABASE_URL);

//mongoose.connect("mongodb+srv://sidd58:Naruto58@cluster-1.ywzro.mongodb.net/deliveryDB?retryWrites=true&w=majority&appName=Cluster-1");
mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster1.ik1yb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");
const db=mongoose.connection;
db.on('error',()=>{console.log("Some error occured")});
db.once('open',()=>{console.log("Connected to database")});
const app=express();

// before this databse is connected and ready
// here we will do our routing work

// basic route added for the ci/cd deployment using cloud build and cloud run in google cloud 

app.get("/",(req,res)=>{
    res.send("Hello CI/CD cloud build and cloud run");
});

app.get("/health",(req,res)=>{
    res.send("Health check is successfull");
});




app.use(express.json());
//Deliveries routes
const deliveryRoute=require("./routes/delivery");
app.use("/deliveries",deliveryRoute);



// app.listen(process.env.PORT,()=>{
//     console.log(`Server is started at PORT ${process.env.PORT}`)
// });

app.listen(8080,()=>{
    console.log(`Server is started at PORT ${process.env.PORT}`)
});
