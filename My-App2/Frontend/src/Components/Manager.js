import React, { useEffect, useState } from 'react';
import './Manager.css';

const Manager = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/getorders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch orders: ${response.statusText}`);
        }

        const tableData = await response.json();
        console.log('Fetched data:', tableData); // Debugging line
        setTables(tableData.data); // Ensure this matches the actual response structure
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure tables is an array before mapping
  if (!Array.isArray(tables)) {
    return <div>No tables data available.</div>;
  }

  return (
    <div className="Manager">
      <h1>Restaurant Orders</h1>
      {tables.map((table) => (
        <div key={table.tableNumber} className="table-container">
          <h2>Table {table.tableNumber}</h2>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(table.orders) && table.orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.itemName}</td>
                  <td>{order.quantity}</td>
                  <td>${order.price.toFixed(2)}</td>
                  <td>${(order.price * order.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Amount: ${calculateTotal(table.orders).toFixed(2)}</h3>
        </div>
      ))}
    </div>
  );
};

// Function to calculate total amount for each table
const calculateTotal = (orders) => {
  if (!Array.isArray(orders)) return 0; // Safety check
  return orders.reduce((total, order) => total + (order.price * order.quantity), 0);
};

export default Manager;
