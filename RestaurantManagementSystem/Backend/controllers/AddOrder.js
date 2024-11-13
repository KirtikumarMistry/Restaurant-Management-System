const Order = require('../models/Order.js');
const Item = require('../models/Item.js');
const Table = require('../models/Table.js');

const AddOrder = async (req, res) => {
    try {
        const { Table_Number, Items_Ordered } = req.body; // Expect 1D array of items in the request body

        // Step 1: Find the table by Table_Number
        const table = await Table.findOne({ Number: Table_Number });

        if (!table) {
            console.log("Table not found");
            return res.status(401).json({
                message: "Table not found"
            });
        }

        // Step 2: Initialize total price and total quantity
        let totalPrice = 0;
        let totalQuantity = 0;
        const orderedItems = [];

        // Step 3: Loop through the Items_Ordered array (1D) and get their details from the database
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

            orderedItems.push({
                Name: item.Name,
                Quantity: item.Quantity,
                Price: dbItem.Price,
            });
        }

        // Step 4: Check if there's already an order for this table number
        let existingOrder = await Order.findOne({ Table_Number: Table_Number });

        if (existingOrder) {
            // Push the new order items into the 2D array as a new group
            existingOrder.Items_Ordered.push(orderedItems);

            // Update the total amount and total quantity
            existingOrder.Total_Amount += totalPrice;
            existingOrder.Total_Quantity += totalQuantity;

            await existingOrder.save();

            // Update the table's revenue and status if necessary
            table.Total_Revenue += totalPrice;
            table.Status = true; // Mark the table as active
            await table.save();

            // Return success response for the updated order
            return res.status(200).json({
                message: "Order updated successfully!",
                order: existingOrder,
                success: true,
            });
        } else {
            // Step 5: Create a new order if none exists
            const newOrder = await Order.create({
                Table_Number: Table_Number,
                Items_Ordered: [orderedItems],  // Push the first order group into the 2D array
                Total_Amount: totalPrice,
                Total_Quantity: totalQuantity,
            });

            // Update the table's status and revenue
            table.Status = true; // Mark the table as occupied
            table.Total_Revenue += totalPrice;
            await table.save();

            // Return success response for the new order
            return res.status(201).json({
                message: "Order added successfully!",
                order: newOrder,
                success: true,
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
