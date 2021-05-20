import './App.css';
import {Router, Link} from '@reach/router'
import CreateProduct from "./components/CreateProduct";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import UpdateProduct from "./components/UpdateProduct";


function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Link to="/" className="btn btn-warning mr-3">Home</Link> 
        <Link to="/products/create" className="btn btn-success">New Product</Link>
      </div>
      
      <Router>
        <AllProducts path="/"></AllProducts>
        <CreateProduct path="/products/create"></CreateProduct>
        <ProductDetails path="/products/:id"></ProductDetails>
        <UpdateProduct path = "/products/update/:id"></UpdateProduct>
      </Router>
    </div>
  );
}

export default App;
