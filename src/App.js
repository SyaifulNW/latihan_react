import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import {useState, useEffect} from "react"
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import AddProduct from "./components/Addproduct";
import EditProduct from "./components/EditProduct";


function App() {

  return (
  <div className="container">
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>

      </Routes>
    </Router>


  </div>
  </div>
  </div>
  );
}

export default App;
