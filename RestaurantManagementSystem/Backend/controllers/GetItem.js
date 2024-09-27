const Item = require('../models/Item');

const GetItem = async (req, res) => {
    try 
    {
        const items = await Item.find({});

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

module.exports = GetItem;
