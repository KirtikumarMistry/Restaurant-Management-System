const Items = require('../model/Items.js');

const GetItems = async (req, res) => {
    try 
    {
        const items = await Items.find({});

        const formattedItems = items.map((item) => { 
            return {
                name: item.Name,
                description: item.Description,
                price: item.Price,
                image: item.Image,
            };
        });

        res.status(201).json({
            message: "Items retrieved and formatted successfully",
            data: formattedItems,
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

module.exports = GetItems;
