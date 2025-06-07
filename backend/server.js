import express from 'express'

const app = express();

app.get("/", (req,res) => {
    res.send("server is ready");
})

app.listen(5000, () =>{
    console.log("server started at http://localhost:5000 hello");
});

//Mongodb pw== #MauGondu@01
//string== mongodb+srv://AadiRoh:<db_password>@cluster0.15zmli2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
