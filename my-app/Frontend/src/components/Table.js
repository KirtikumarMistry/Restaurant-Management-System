import './Table.css';
import Item from './Item.js';
import { useState , useEffect} from 'react';

function Table(props)
{
    const [tabledata, settabledata]=useState(props.tabledata);


    function checkout(tableNumber)
    {
        fetch('http://localhost:5000/addtotalordered',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({tableNumber : tableNumber})
        })
        .then(response => response.json())
        .then(data => {
            const updatedData = { ...tabledata, status: false };
            settabledata(updatedData);
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="Table">
            <div className="Table_number">
                    Table {`${tabledata.number}`}
            </div>
            <div className="Table_status" style={{
                color: tabledata.status ? "green" : "blue",
            }}
            >
                Status : {`${tabledata.status}`}
            </div>
            <div>
                {
                    tabledata.status ? <Item tableNumber={tabledata.number} checkout={(tableNumber) => checkout(tableNumber)}></Item> : null
                }
            </div>
        </div>
    )
}

export default Table;