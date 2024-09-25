import { useState } from 'react';
import './App.css';
import Tables from './components/Tables.js';
import Order from './components/Order.js';

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

  return (
    <div className='App'>
      <button onClick={customer}>Customer</button>
      <button onClick={manager}>Manager</button>
      <div>{display}</div>
    </div>
  );
}


export default App;
