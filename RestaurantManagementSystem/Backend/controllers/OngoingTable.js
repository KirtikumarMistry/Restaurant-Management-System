const  Table=require('../models/Table') 
const Item=require('../models/Item')
const Order=require('../models/Order');

const findTables = async () => {
    return await Table.find(); 
};

const findItems = async () => {
    return await Item.find(); 
};

const OngoingTable=async (req,res)=>{
    try {
        const tables = await findTables(); // Fetch tables
        const items = await findItems();
        const ongoingTables=await Order.find({})  // Fetch items
        res.render('OngoingTables',{ tables, items,ongoingTables });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = OngoingTable;