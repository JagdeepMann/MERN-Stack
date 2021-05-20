import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const ProductDetails = (props) => {
    const[productDetails, setProductDetails]=useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log(`***********`);
                console.log(res.data);
                console.log(`***********`);
                setProductDetails(res.data.results);
            })
        .catch(err => console.log(err));
    }, []);


    const deleteHandler =()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${props.id}`)
        .then(res=>{
            console.log(`***********`);
            console.log(res)
            console.log(`***********`);
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
        <div className="container mt-4">
            <div>
            <h1>Product Details for : {props.id}</h1>
            <p>Title: {productDetails.title}</p>
            <p>Price: {productDetails.price}</p>
            <p>Desc: {productDetails.description}</p>
            </div>
            <div>
                <Link to = {`/products/update/${props.id}`} className="btn btn-warning mr-3">Update Product</Link>
                <Link to="#" onClick={deleteHandler} className="btn btn-danger">Delete Product</Link>
            </div>
            <div>
                
            </div>
        </div>
        
        </>
    );
};


export default ProductDetails;