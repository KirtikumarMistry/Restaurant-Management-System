const Order = require('../models/Order.js');
const Item = require('../models/Item.js');
const Table = require('../models/Table.js');

const AddOrder = async (req, res) => {
    try {
        // Assuming the Table_Number is being passed as a URL parameter or set programmatically
        const  Table_Number  = 5; // Use req.params.Table_Number instead of req.body.Table_Number
        const {Items_Ordered} = req.body; // Expect only items in the request body

        console.log(Items_Ordered);

        // Step 1: Find the table by Table_Number
        const table = await Table.findOne({ Number: 5 });

        if (!table) {
            console.log("Table not found");
            return res.status(401).json({
                message: "Table not found"
            });
        }

        // Step 2: Calculate total price and total quantity from the ordered items
        let totalPrice = 0;
        let totalQuantity = 0;
        const orderedItems = [];

        for (const item of Items_Ordered) {
            const dbItem = await Item.findOne({ Name: item.Name });

            if (!dbItem) {
                return res.status(404).json({
                    message: `Item ${item.Name} not found`
                });
            }

            const itemTotalPrice = dbItem.Price * item.Quantity;
            totalPrice += itemTotalPrice;
            totalQuantity += item.Quantity;

            // Prepare ordered items for saving
            orderedItems.push({
                Name: item.Name,
                Quantity: item.Quantity,
                Price: dbItem.Price,
            });
        }

        // Step 3: Check if there's already an order for this table number
        let existingOrder = await Order.findOne({ Table_Number: Table_Number });

        if (existingOrder) {
            // Update existing order
            existingOrder.Items_Ordered.push(...orderedItems);
            existingOrder.Total_Amount += totalPrice;
            existingOrder.Total_Quantity += totalQuantity;

            await existingOrder.save();

            // Update table's revenue and status if necessary
            table.Total_Revenue += totalPrice;
            table.Status = true; // Mark the table as active if needed
            await table.save();

            // Step 4: Return success response for the updated order
            return res.status(200).json({
                message: "Order updated successfully!",
                order: existingOrder,
                success:true,
            });
        } else {
            // Step 5: Create a new order if none exists
            const newOrder = await Order.create({
                Table_Number: Table_Number,
                Items_Ordered: orderedItems,
                Total_Amount: totalPrice,
                Total_Quantity: totalQuantity,
            });

            // Update the table's status and revenue
            table.Status = true; // Mark the table as occupied
            table.Total_Revenue += totalPrice;
            await table.save();

            // Step 6: Return success response for the new order
            return res.status(201).json({
                message: "Order added successfully!",
                order: newOrder,
                success:true,
            });
        }
    } catch (err) {
        console.error(err);
        // Return error response
        return res.status(500).json({
            data: "An error occurred",
            message: err.message,
        });
    }
};

module.exports = AddOrder;
