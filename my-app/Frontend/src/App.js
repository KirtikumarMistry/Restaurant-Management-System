import { useState } from 'react';
import './App.css';
import Tables from './components/Tables.js';
import Order from './components/Order.js';
import Admin from './components/Admin.js';
import PlaceOrder from './components/PlaceOrder.js';

function App() {
  
  const [display, setdisplay]=useState(<Tables></Tables>);

  function customer()
  {
    setdisplay(<Order></Order>);
  }
  function manager()
  {
    setdisplay(<Tables></Tables>)
  }
  function admin()
  {
    setdisplay(<Admin></Admin>)
  }

  <button></button>
  return (
    <div className='App'>
      <button onClick={customer}>Customer</button>
      <button onClick={manager}>Manager</button>
      <button onClick={admin}>Admin</button>
      <div>{display}</div>
    </div>
  );
}


export default App;
