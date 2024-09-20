
import React, { useEffect } from 'react'
import { useState } from 'react';
function Admin() {
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalItemsSold, setTotalItemsSold] = useState(120);
    const [adminName, setAdminName] = useState("John Doe");

    // Table data
    const [items, setItems] = useState([
        { id: 1, name: "Pizza", price: 12.99, quantity: 30 },
        { id: 2, name: "Burger", price: 8.99, quantity: 50 },
    ]);

    // New item input states
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");

    // Add new item
    const addItem = (e) => {
        e.preventDefault();
        const newItem = {
            id: items.length + 1,
            name: itemName,
            price: parseFloat(itemPrice),
            quantity: parseInt(itemQuantity),
        };

        setItems([...items, newItem]);

        // Update totals
        setTotalRevenue(totalRevenue + newItem.price * newItem.quantity);
        setTotalItemsSold(totalItemsSold + newItem.quantity);

        // Reset input fields
        setItemName("");
        setItemPrice("");
        setItemQuantity("");
    };
    async function GetItems() {
        try {
            const res=await fetch('http://localhost:5000/AdminData',{
                method:'GET',
                headers: {
                    'content-type': "application/json",
                  },
            })
            const data=await res.json();
             if(data.success)
             {
                setTotalRevenue(data.Total_Amount)
             }
             
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        GetItems();
    }, [])
    return (
        <div>
            <div className="container mx-auto p-6">
                {/* Admin Overview Section */}
                <div className="flex justify-between items-center mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
                    <div>
                        <h2 className="text-xl font-bold text-gray-700">Admin Name: {adminName}</h2>
                    </div>
                    <div>
                        <p className="text-lg text-green-600">Total Revenue: ${totalRevenue.toFixed(2)}</p>

                    </div>
                </div>

                {/* Item Table */}
                <div className="mb-8 overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Item Name</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {items.map((item) => (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{item.name}</td>
                                    <td className="py-3 px-6 text-left">${item.price.toFixed(2)}</td>
                                    <td className="py-3 px-6 text-left">{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Add Item Form */}
                <form onSubmit={addItem} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Add New Item</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="flex flex-col">
                            <label className="text-gray-600 mb-2">Item Name</label>
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 mb-2">Item Price</label>
                            <input
                                type="number"
                                className="p-2 border border-gray-300 rounded"
                                value={itemPrice}
                                onChange={(e) => setItemPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col sm:col-span-2">
                            <label className="text-gray-600 mb-2">Quentity</label>
                            <input
                                type="number"
                                className="p-2 border border-gray-300 rounded"
                                value={itemQuantity}
                                onChange={(e) => setItemQuantity(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Admin
