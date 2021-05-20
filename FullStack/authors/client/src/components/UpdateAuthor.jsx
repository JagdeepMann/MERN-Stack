import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const UpdateAuthor = (props) => {

    const[authorDetails, setAuthorDetails] = useState({
        name:""
    })
    const[errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res => {
                console.log(`***********`);
                console.log(res.data);
                console.log(`***********`);
                setAuthorDetails(res.data.results);
            })
        .catch(err => console.log(err));
    }, []);

    const changeHandler=(e)=>{
        setAuthorDetails({
            ...authorDetails,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props.id}`, authorDetails)
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
            <h3>Update this author</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name</label>             
                    <input onChange={changeHandler} type="text" className="form-control" id="" name="name" value={authorDetails.name}/>
                    <p className="text-danger">{errors.name? errors.name.message: ""}</p>     
                <button type="submit" className="btn btn-success">Update</button>
                <Link to ='/' className="btn btn-warning">Cancel</Link>
                </div>
            </form>
        </div>
    );
};


export default UpdateAuthor;