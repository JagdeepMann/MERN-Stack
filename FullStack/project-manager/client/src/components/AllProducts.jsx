import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from '@reach/router';


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    //state variable to delete
    const[deleteClicked, setDeleteClicked] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(`***********`);
                console.log(res.data);
                console.log(`***********`);
                setAllProducts(res.data.results);
            })
            .catch(err => console.log(err));
    }, [deleteClicked]);

const deleteHandler =(e, productId)=>{
    axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
    .then(res=>{
        console.log(`***********`);
        console.log(res)
        console.log(`***********`);
        setDeleteClicked(deleteClicked+1)
        // navigate("/")
    })
    .catch(err=>{
        console.log(err)
    })
}

    return (
        <div className="container mt-5">
            <h1>All Products</h1>
            {
                allProducts.map((product, i) => {
                    return <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">{product.title}</h4>
                            <p class="card-text">{product.price}</p>
                            <p class="card-text">{product.description}</p>
                        </div>
                        <div>
                            <Link to={`/products/${product._id}`} className = "btn btn-warning mr-5 mb-3">View Product</Link> 
                            <Link to="#" onClick={(e)=>deleteHandler(e, product._id)} className = "btn btn-danger mr-5 mb-3">Delete Product</Link>
                        </div> 

                    </div>
                }

                )
            }
        </div>
    );
};



export default AllProducts;