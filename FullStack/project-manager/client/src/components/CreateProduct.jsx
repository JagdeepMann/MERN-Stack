import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";

// import {useState, useEffect} from 'react';


const CreateProduct = () => {

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    })

    const[errors, setErrors] = useState({})

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", formInfo)
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
        <div className="container mt-5">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    
                    <input onChange={changeHandler} type="text" className="form-control" id="" name="title"/>
                    <p className="text-danger">{errors.title? errors.title.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange={changeHandler}type="number" className="form-control" id="" name="price"/>
                    <p className="text-danger">{errors.price? errors.price.message: ""}</p>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={changeHandler}type="Textarea" className="form-control" id="" name="description"/>
                    <p className="text-danger">{errors.description? errors.description.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">checkbox?:</label>
                    <input type="checkbox" className="form-control" checked={formInfo.ischecked} name="" value=""/>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};


export default CreateProduct;