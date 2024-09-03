import React, { useState, useEffect } from 'react';
import Addtocart from './Addtocart.js';

function Menu(props)
{
    const [menu, setmenu] = useState([]);
    const [order, setorder]=useState([]);
    
    useEffect(() => 
    {
        fetch('http://localhost:5000/getitem',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            setmenu(data)
            let ord=[];
            data.map((item) => {
                ord[`${item.name}`]=0;
            })
            setorder(ord);
            console.log(data);
        })
        .catch(error => console.error(error));
    }, []);
    function cart(itemname, count)
    {
        let ord = order;
        ord[`${itemname}`]=count;
        setorder(ord);

        props.itemordered(order);
    }
    
    return (
        <div>
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