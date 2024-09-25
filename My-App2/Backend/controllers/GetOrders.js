const Orders = require('../model/Orders.js');

const GetOrders = async (req, res) => {
    try 
    {
        const orders=await Orders.find({});

        // Format the orders into the desired structure
        const formattedOrders = orders.map(order => ({
            tableNumber: order.Table_Number,
            orders: order.Items_Ordered.map(item => ({
                itemName: item.Name,
                quantity: item.Quantity,
                price: item.Price,
            })),
            totalAmount : order.Total_Amount
        }));

        res.status(200).json({
            success: true,
            message: "Successfully fetched orders data",
            data: formattedOrders
        });
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Error occurred",
            message: err.message,
        });
    }
};

module.exports = GetOrders;
