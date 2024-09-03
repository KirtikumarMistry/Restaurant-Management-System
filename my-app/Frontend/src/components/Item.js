import './Item.css';
import React, { useEffect, useState } from 'react';

function Item(props) {
    const [showitem, setshowitem]=useState(false);
    const [description, setdescription]=useState([]);

    function set_description()
    {
        if(!showitem)
        {
            let itemordered=[];

            fetch(`http://localhost:5000/getitemordered/${props.tableNumber}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                setdescription(data);
            })
            .catch(error => console.error(error));
        }
        else
        {
            setdescription([]);
        }
        setshowitem(!showitem);
    }
    function checkout()
    {
        props.checkout(props.tableNumber);
    }
    
    return (
        <div className='Item'>
            <button className='Item_showitem' onClick={set_description}>{
                showitem ? "Hide Items" : "Show Items"
            }</button>
            <div className='Item_description'>
            {
                description.map((item, index) => (
                    <div key={index}>
                        {item.name} : {item.count}
                    </div>
                ))}
            </div>
            <button className='Item_checkout' onClick={checkout}>Checkout</button>
        </div>
    )
}

export default Item;