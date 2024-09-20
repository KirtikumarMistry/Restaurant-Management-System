function CustomerPage()
{
    const fetchmenu = async() => {
        try
        {
            const itemResponse = await fetch('http://localhost:5000/getitem', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const itemData = await itemResponse.json();
            
            console.log(itemData.data);
        }
        catch(err)
        {
            console.log("Menu failed.");
        }
    }

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Delicious Menu</h1>
            {fetchmenu()}
        </div>
    )
}

export default CustomerPage;