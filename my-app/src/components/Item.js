import './Item.css';
import React, { useState } from 'react';

function Item() {
    const [showitem, setshowitem]=useState(false);
    const [description, setdescription]=useState();

    function set_description()
    {
        if(!showitem)
        {
            setdescription("This is a description");
        }
        else
        {
            setdescription();
        }
        setshowitem(!showitem);
    }

    return (
        <div className='Item'>
            <button className='Item_showitem' onClick={set_description}>{
                showitem ? "Hide Items" : "Show Items"
            }</button>
            <div className='Item_description'>
                {description}
            </div>
            <button className='Item_checkout'>Checkout</button>
        </div>
    )
}

export default Item;