const findTables = async () => {
    return await Table.find(); // Fetches all tables
};

const findItems = async () => {
    return await Item.find(); // Fetches all menu items
};

const Admin=async (req,res)=>{
    try {
        const tables = await findTables(); // Fetch tables
        const items = await findItems();   // Fetch items
        res.render('admin', { tables, items }); // Render the admin page with fetched data
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = Admin;