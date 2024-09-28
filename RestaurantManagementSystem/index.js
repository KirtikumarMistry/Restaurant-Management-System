const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs");
const cors = require('cors');

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join('Frontend', 'public')));
const { v4: uuidv4 } = require('uuid');

const dbConnection = require('./Backend/config/database');
dbConnection();

app.use(express.static(path.join('Frontend', 'assets')));
const {collection,orderdetcoll} = require("./Backend/models/db");

app.set("view engine","ejs")
app.set("views", path.join('Frontend', 'views'));
app.use(express.urlencoded({extended:false}))

const port=process.env.PORT || 4000;

const Router=require('./Backend/routers/route');
app.use("/", Router);

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
const router=require('./Backend/routers/route')
app.use(router)


