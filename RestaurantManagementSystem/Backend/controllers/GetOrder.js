const Order = require('../models/Order');

const GetOrder = async (req, res) => {
    try 
    {
        const Table_Number =req.params.Number;

        const order=await Order.findOne({Table_Number});
        if(!order)
        {
            return res.status(404).json({
                message:"Order not found",
                data: null,
            });
        }

        res.status(201).json({
            message: "Items retrieved and formatted successfully",
            data: order,
            success: true,
        });
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({
            data: "Error occurred",
            message: err.message,
        });
    }
};

module.exports = GetOrder;
