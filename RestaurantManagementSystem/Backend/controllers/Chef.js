const Chef = async(req, res) => {
    try
    {
        res.render('Chef');        
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

module.exports=Chef;