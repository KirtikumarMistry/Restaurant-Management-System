const ShowItems = async(req, res) => {
    try
    {
        res.render('ShowItems');        
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

module.exports=ShowItems;