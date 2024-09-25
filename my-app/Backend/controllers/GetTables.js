const Tables=require('../model/Tables.js');

const GetTables=async(req, res) => {
    try{
        const tables=await Tables.find({});

        let tab=[];
        tables.map((it) => {
            tab.push({number : it.number, status : it.status});
            return it;
        })
        res.send(tab);
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

module.exports=GetTables;