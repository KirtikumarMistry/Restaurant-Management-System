import React, { useState, useEffect } from 'react';
import Addtocart from './Addtocart.js';

function Menu(props)
{
    const [menu, setmenu] = useState(props.menu);
    const [order, setorder]=useState(props.order);
    
    function cart(itemname, count)
    {
        let ord = order;
        ord[`${itemname}`]=count;
        setorder(ord);

        props.itemordered(order);
    }
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Delicious Menu</h1>
            {
                menu.map((item) => {
                    return (
                        <div className="Menu_item">
                            <div className="item_name">
                                <h2>{item["name"]}</h2>
                            </div>
                            <div className="item_price">
                                Rs. {item["price"]}
                            </div>
                            <Addtocart itemname={item["name"]} cart={(count)  =>  cart(item["name"],count)}></Addtocart>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu;