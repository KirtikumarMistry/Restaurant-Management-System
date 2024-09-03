import { useEffect, useState } from "react"

function Admin()
{
    const [showTableInput, setShowTableInput] = useState(false);
    const [tableNumber, setTableNumber] = useState('');
    const [showItemInput, setShowItemInput] = useState(false);
    const [itemName, setitemName] = useState('');
    const [itemPrice, setitemPrice] = useState('');
    const [Totalrevenue, setTotalrevenue]=useState(0);

    useEffect(() => 
    {
        fetch('http://localhost:5000/getadmindata',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setTotalrevenue(Totalrevenue+data.revenue);
        })
        .catch(error => console.error(error));
    }, []);

    function handleTableNumberChange(event) {
        setTableNumber(event.target.value);
    }
    function handleAddTableClick() {
        setShowTableInput(!showTableInput);
    }
    function addTable()
    {
        console.log(tableNumber);

        fetch('http://localhost:5000/addtable',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({number: tableNumber})
        })
        .then(response => response.json())
        .then(data => {
            if(data=="0")
            {
                alert("Table added successfully");
            }
            else
            {
                alert("Alrady exist");
            }
        })
        .catch(error => console.error(error));
    }

    function handleitemNameChange(event) {
        setitemName(event.target.value);
    }
    function handleitemPriceChange(event) {
        setitemPrice(event.target.value);
    }
    function handleAddItemClick() {
        setShowItemInput(!showItemInput);
    }
    function addItem()
    {
        console.log(itemName);
        console.log(itemPrice);

        fetch('http://localhost:5000/additem',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name : itemName, price : itemPrice})
        })
        .then(response => response.json())
        .then(data => {
            if(data=="0")
            {
                alert("Item added successfully");
            }
            else
            {
                alert("Alrady exist");
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <h1>Admin</h1>
            <div>
                <h3>Total Revenue : </h3>
                <div> Rs. {Totalrevenue}</div>
            </div>
            <button onClick={handleAddTableClick}>
                Add Table
            </button>
            {
                showTableInput ? 
                <div>
                Enter Table Number : 
                <input type="text" value={tableNumber} onChange={handleTableNumberChange} />
                <button onClick={addTable}>Add Table</button>
              </div> : null
            }
            <button onClick={handleAddItemClick}>
                Add Item
            </button>
            {
                showItemInput ? 
                <div>
                Enter Item Number : 
                <input type="text" value={itemName} onChange={handleitemNameChange} />
                Enter Price :
                <input type="text" value={itemPrice} onChange={handleitemPriceChange} />
                <button onClick={addItem}>Add Item</button>
              </div> : null
            }
        </div>
    )
}

export default Admin;