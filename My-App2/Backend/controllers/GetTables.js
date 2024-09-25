const Tables = require('../model/Tables.js');

const GetTable = async (req, res) => {
    try 
    {
        const tables=await Tables.find({});

        const formattedTables = tables.map((table) => ({
            tableNumber: table.Number,
            status: table.Status,
          }));
          console.log(formattedTables);

        res.status(201).json({
            message: "Tables fetched successfully",
            data: formattedTables,
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
