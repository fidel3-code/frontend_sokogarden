import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Mpesa from './components/Mpesa';
import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';




function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 clasName="text-white">Sokogarden-Buy and Sell Online</h1>
      </header>
      <nav>

        <Link to="/" className="btn btn-success text-white p-1 m-3 btn-outline-warning">Get Products</Link>
        <Link to="/addproducts" className='btn btn-success text-white p-1 m-3 btn-outline-warning'>Add Products</Link>
        <Link to="/signin" className='btn btn-success text-white p-1 m-3 btn-outline-warning'>SignIn</Link>
        <Link to="/signup" className='btn btn-success text-white p-1 m-3 btn-outline-warning'>SignUp</Link>



      </nav>




      <Routes>
        <Route path='/' element={ <GetProducts/>}/>
        <Route path='/addproducts' element={ <AddProduct/>}/>
        <Route path='/mpesa' element={ <Mpesa/>}/>
        <Route path='/signin' element={ <SignIn/>}/>
        <Route path='/signup' element={ <SignUp/>}/>
      </Routes>
    </div>
    </Router>
  );
}

    // <><Mpesa /><GetProducts /><SignIn /><SignUp /></>


export default App;
