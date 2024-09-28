const FoodGallery = async(req, res) => {
    try
    {
        res.render('FoodGallery');        
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({
            data:"error occurred",
            message:err.message,
        });
    }    
}

module.exports=FoodGallery;