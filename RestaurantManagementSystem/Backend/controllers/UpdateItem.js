const Item = require('../models/Item')

const UpdateItem = async (req, res) => {
    try {
        const id = req.params.itemId;
        const { Name, Description, Price, Image } = req.body;
        let itemobj = {};
        if (Name) {
            itemobj.Name = Name;
        }
        if (Description) {
            itemobj.Description = Description
        }
        if (Price) {
            itemobj.Price = Price
        }
        if (Image) {
            itemobj.Image = Image
        }
        const UpdateItem=await Item.findByIdAndUpdate(id,itemobj,{new:true})

        if(!UpdateItem){
            return res.status(404).json({
                success:false,
                message:"Item is not Updated"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Item is Updated"
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error while Updating Item,please try again"
        })
    }
}

module.exports = UpdateItem