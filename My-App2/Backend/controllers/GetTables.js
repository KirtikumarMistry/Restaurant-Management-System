const Tables = require('../model/Tables.js');

const GetTable = async (req, res) => {
    try 
    {
        const tables=await Tables.find({});

        res.status(201).json({
            message: "Tables fetched successfully",
            data: tables,
        })
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({
            data: "Error occurred",
            message: err.message,
        });
    }
};

module.exports = GetTable;
