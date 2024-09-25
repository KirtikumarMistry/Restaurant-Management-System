import React, { useEffect, useState } from 'react';
import './Manager.css';

const Manager = () => {
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await fetch('http://localhost:5000/gettables', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const tableData = await response.json();
        console.log('Fetched data:', tableData);
        setTables(tableData.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

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

        const orderData = await response.json();
        console.log('Fetched data:', orderData);
        setOrders(orderData.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTables();
    fetchOrders();
  }, []);

  // Function to handle checkout, sets table status to false
  const handleCheckout = (tableNumber) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.tableNumber === tableNumber ? { ...table, status: false } : table
      )
    );
  };

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
      <h1 className="heading">Restaurant Orders</h1>

      {tables.map((table) => {
        // Check if table status is true
        if (table.status === true) {
          // Find the corresponding order for this table
          const order = orders.find((o) => o.tableNumber === table.tableNumber);
          console.log(order);

          return (
            <div key={table.tableNumber} className="table-container">
              <h2 className="t5">Table {table.tableNumber}</h2>

              {order ? (
                <div>
                  <table className="table1">
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody className="rows">
                      {Array.isArray(order.orders) &&
                        order.orders.map((orderitem, index) => (
                          <tr key={index}>
                            <td>{orderitem.itemName}</td>
                            <td>{orderitem.quantity}</td>
                            <td>${orderitem.price.toFixed(2)}</td>
                            <td>${(orderitem.price * orderitem.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <h3 className="amount">Total Amount: ${order.totalAmount.toFixed(2)}</h3>
                </div>
              ) : (
                <div>
                  <h3 className="amount">No orders for this table.</h3>
                </div>
              )}

              <button
                className="checkout-button"
                onClick={() => handleCheckout(table.tableNumber)}
              >
                Checkout
              </button>
            </div>
          );
        } else {
          return (
            <div key={table.tableNumber} className="table-container">
              <h2 className="t5">Table {table.tableNumber}</h2>
              <div className="amount">
                <h3>Empty</h3>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Manager;
