const Home = async(req, res) => {
    try
    {
        res.render('Home',{
            Log:false
        });        
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

module.exports=Home;