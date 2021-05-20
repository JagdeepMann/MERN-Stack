import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const CreateAuthor = () => {

    const[formInfo, setFormInfo] = useState({
        name:''
    })
    const[errors, setErrors]= useState({})

    const changeHandler=(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/create", formInfo)
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
        <div>
            <Link to='/'>Home</Link>
            <h3>Add a new author : </h3>

            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name : </label>
                    
                    <input onChange={changeHandler} type="text" className="form-control" id="" name="name"/>
                    <p className="text-danger">{errors.name? errors.name.message: ""}</p>
                </div>
                
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/" className="btn btn-warning">Cancel</Link>
            </form>
        </div>
    );
};


export default CreateAuthor;