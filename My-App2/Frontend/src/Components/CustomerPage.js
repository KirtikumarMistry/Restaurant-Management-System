import { useEffect, useState } from "react";

import ItemControl from "./ItemControl.jsx";

function CustomerPage() {
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState([]);
    const [itemCount, setItemCount] = useState({}); // To store count for each item

    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchMenu = async () => {
            try {
                const itemResponse = await fetch('http://localhost:5000/getitems', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const itemData = await itemResponse.json();
                setMenu(itemData.data);
                setItemCount(itemData.data.reduce((acc, item) => {
                    acc[item.id] = 0; // Set initial count of each item to 0
                    return acc;
                }, {}));
            } catch (err) {
                console.log("Menu fetch failed.", err);
            } finally {
                setLoading(false);
            }
        };

        // Call the async function
        fetchMenu();
    }, []);

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            {loading ? (
                <p>Loading...</p>
            ) : menu.length > 0 ? (
                <ul className="menu-list w-[300px] mx-auto ">
                    {menu.map((item) => (
                        <li key={item.id} className="menu-item shadow-2xl w-[500px] flex flex-col justify-center bg-white mb-2 h-[200px]">
                            <div className="font-bold text-center text-3xl">{item.name}</div>
                            <div className="text-blue-800 font-bold text-center mb-5 text-2xl">${item.price}</div>
                            <ItemControl></ItemControl>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items found</p>
            )}
        </div>
    );
}

export default CustomerPage;
