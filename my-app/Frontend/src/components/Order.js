import { useState } from 'react';
import Menu from './Menu.js'

function Order()
{
    let [Item_ordered, setItem_ordered]=useState([]);
    let [tableNumber, setTableNumber] = useState('');

    function setitemordered(order)
    {
        setItem_ordered(order);
    }

    function handleTableNumberChange(event) {
        setTableNumber(event.target.value);
    }

    function ordernow()
    {
        console.log(tableNumber);        

        let itemname=[];
        for (let key in Item_ordered) {
            if (Item_ordered.hasOwnProperty(key)) {
                let value = Item_ordered[key];
                if(value>0)
                {
                    itemname.push({name : key, count : value});
                }
            }
        }

        fetch('http://localhost:5000/additemordered',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({tablenumber : tableNumber , itemname : itemname})
        })
        .then(response => response.json())
        .then(data => {
            if(data=="0")
            {
                alert("Order placed successfully");
            }
            else
            {
                alert("Order failed");
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <div>
                Table Number : 
                <input type="text" className='table_number' value={tableNumber} onChange={handleTableNumberChange}></input>
            </div>
            <div>
                <Menu itemordered={(order) => setitemordered(order)}></Menu>
            </div>
            <button  onClick={ordernow}>
                Order Now
            </button>
        </div>
    )
}

export default Order;