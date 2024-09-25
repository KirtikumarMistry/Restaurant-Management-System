const moongoose=require('mongoose');

require("dotenv").config();

const dbConnection = () => {
    moongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("DB connected successfully.")})
    .catch((err) => {
        console.log(err);
        console.log("DB connection failed.");
    })
}

module.exports= dbConnection;