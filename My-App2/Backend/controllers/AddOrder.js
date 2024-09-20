const Orders = require('../model/Orders.js');
const Items = require('../model/Items.js');
const Tables = require('../model/Tables.js');

const AddOrder = async (req, res) => {
    try {
        const { Table_Number, Items_Ordered } = req.body;
        console.log(Items_Ordered);

        const table = await Tables.findOne({ Number: Table_Number });

        if (!table) {
            return res.status(401).json({
                message: "Table not found"
            });
        }

        let totalPrice = 0;
        let totalQuantity = 0;
        const orderedItems = [];

        for (const item of Items_Ordered) {
            const dbItem = await Items.findOne({ Name: item.Name });

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
        let existingOrder = await Orders.findOne({ Table_Number: Table_Number });

        if (existingOrder) {
            // Update existing order
            existingOrder.Items_Ordered.push(...orderedItems);
            existingOrder.Total_Amount += totalPrice;
            existingOrder.Total_Quantity += totalQuantity;

            await existingOrder.save();

            // Update table's status and revenue if needed
            table.Total_Revenue += totalPrice;
            await table.save();

            // Step 5: Return success response
            res.status(200).json({
                message: "Order updated successfully!",
                order: existingOrder,
            });
        } else {
            // Create a new order if none exists
            const newOrder = await Orders.create({
                Table_Number: Table_Number,
                Items_Ordered: orderedItems,
                Total_Amount: totalPrice,
                Total_Quantity: totalQuantity,
            });

            // Update table's status and revenue
            table.Status = true; 
            table.Total_Revenue += totalPrice;
            await table.save();

            // Step 5: Return success response
            res.status(201).json({
                message: "Order added successfully!",
                order: newOrder,
            });
        }
    } 
    catch (err) 
    {
        console.error(err);
        res.status(500).json({
            data: "error occurred",
            message: err.message,
        });
    }
}

module.exports = AddOrder;
