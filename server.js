const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const prodcutRoutes = require("./routes/productRoutes");
const showProduct = require("./routes/getProduct");




const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/product', prodcutRoutes);
app.use('/show', showProduct);
//Connection to MongoDB

mongoose.connect("mongodb+srv://bariyavasu46:g0BkE8Sxi8JOwPW2@cluster0.ksdxbvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected"))
.catch((err)=> console.log(`Falied to connected ${err}`));






app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})
