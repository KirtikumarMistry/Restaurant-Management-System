const Table = require('../models/Table.js');

const AddTable = async (req, res) => {
    try {
        const { Number } = req.body;

        const alreadyexist = await Table.findOne({ Number: Number });

        if (alreadyexist) {
            return res.status(401).json({
                message: "Table Number Already Exists !!!"
            });
        }

        const addtable = await Table.create({
            Number: Number,
        });

        return res.status(201).json({
            success: true,
            message: `Table ${addtable.Number} Added Successfully !`,
            data: addtable,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            data: "error occurred",
            message: err.message,
        });
    }
}

module.exports = AddTable;