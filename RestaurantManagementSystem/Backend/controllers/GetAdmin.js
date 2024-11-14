const  Table=require('../models/Table') 
const Item=require('../models/Item')
const Order=require('../models/Order');

const Admin=async (req,res)=>{
    try {
        // const totalRevenueToday = 15230.5; // Example data
        const TotalOrders=await Order.find({});
        let totalRevenueToday=0;
        TotalOrders.forEach((order)=>{
           totalRevenueToday+=order.Total_Amount;
        })
        const user=await Order.findOneAndUpdate
        let ongoingTables = 0;
        const Total_ongoing_Tables=await Table.find({});
        let topRevenueTables=[]
         Total_ongoing_Tables.forEach((OnTable)=>{
            if(OnTable.Status == true)
            {
                ++ongoingTables;
                topRevenueTables.push({number:OnTable.Number,revenue:OnTable.Total_Revenue})
            }
         })
         topRevenueTables.sort((a, b) => b.revenue - a.revenue);
         let top_rev=[];
         for(let i=0; i<topRevenueTables.length; ++i)
         {   
            if(top_rev.length>2)
            {
                break;
            }
             top_rev.push(topRevenueTables[i]);
         }
        const tablesInUse = ongoingTables;
        const totalTables = Total_ongoing_Tables.length;
        const averageOrderValue = totalRevenueToday/TotalOrders.length;
       
         res.render('admin',{ totalRevenueToday,
            tablesInUse,
            totalTables,
            averageOrderValue,
            top_rev})
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = Admin;

//Total Orders Completed