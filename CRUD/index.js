import express from "express";
const app = express();

import StudentsController from "./controllers/StudentsController.js";
import AdmController from "./controllers/AdmController.js";
import CoursesController from "./controllers/CoursesController.js";

import connection from "./config/sequelize-config.js";

connection.authenticate().then(() =>{
    console.log("The connection with database was created!");
}).catch((error) =>{
    console.log(error);
})

connection.query(`CREATE DATABASE IF NOT EXISTS cristal;`).then(() =>{
    console.log("The database was created!");
}).catch((error) =>{
    console.log(error);
})

app.set(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", StudentsController);
app.use("/", AdmController);
app.use("/", CoursesController);

app.get("/", function (req, res){
    res.render("index");
});

const port = 8080;
app.listen(port, function (error){
    if (error){
        console.log("It happen an error!");
    } else {
        console.log(`The server was initialize with success in: http://localhost:${port}`);
    }
});

