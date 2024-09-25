import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import CustomerPage from './Components/CustomerPage';
import SignUpPage from './Components/SignUpPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Manager from './Components/Manager';
import Admin from './Components/Admin';

function App() {
  return (
    <div>
      {/* // <HomePage></HomePage> */}
      {/* <Routes>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/manager' element={<Manager></Manager>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/customer' element={<CustomerPage></CustomerPage>}></Route>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
      </Routes> */}
      <CustomerPage></CustomerPage>
    </div>
  );
}

export default App;
