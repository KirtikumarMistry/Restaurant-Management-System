const express=require('express');
const app=express();
const cors = require('cors');

app.use(cors());

require("dotenv").config();
app.use(express.json());

const port=process.env.PORT || 4000;

const Router=require('./routes/route.js')
app.use("/", Router);

const dbConnection = require('./config/database.js');
dbConnection();

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})
