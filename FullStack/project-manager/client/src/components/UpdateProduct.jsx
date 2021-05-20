import {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateProduct = (props) => {

    const[productDetails, setProductDetails]=useState({
        title: "",
        price:"",
        description:""
    });

    const[errors, setErrors] = useState({})

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

    const changeHandler =(e)=>{
        setProductDetails({
            ...productDetails,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, productDetails )
        .then(res=>{
            //if errs then res.data.errors
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                navigate("/")
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div className="container mt-4">
            <h1>Update Product with id : {props.id}</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>             
                    <input onChange={changeHandler} type="text" className="form-control" id="" name="title" value={productDetails.title}/>
                    <p className="text-danger">{errors.title? errors.title.message: ""}</p>     
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange={changeHandler} type="number" className="form-control" id="" name="price" value={productDetails.price}/>
                    <p className="text-danger">{errors.price? errors.price.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="description" value={productDetails.description}/>
                    <p className="text-danger">{errors.description? errors.description.message: ""}</p>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProduct;