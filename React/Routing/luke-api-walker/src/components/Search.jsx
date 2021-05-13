import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


const Search = () => {

    //State Variables
    const [apiInfo, setApiInfo]=useState([]);
    const [formInfo, setFormInfo] = useState({
        category: "people",
        id: ""
    });

    // get info from API and store it in apiInfo state variable
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(res => {
            console.log("*****************");
            console.log(res.data);
            console.log("*****************");
            setApiInfo(Object.keys(res.data));
        })
        .catch(err => console.log(err));
    }, []); //empty array can have values to update page with onChange

    //Event handlers
    const onChange=(e)=>{
        setFormInfo({
            ...formInfo, //make a copy to preserve formInfo from overwrite
            [e.target.name]:e.target.value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate(`/${formInfo.category}/${formInfo.id}`);
    }

    // JSX
    return (
        <div className="container mt-3">
            <form className="form-control" onSubmit={submitHandler} >
                <div className="form-group">
                    <label className="form-label mr-2" htmlFor="">Search For:</label>
                    <select onChange={onChange} name="category" id="" className="form-control">
                        {
                            apiInfo.map((category, i) => {
                                return (
                                    <option key={i} value={category} >{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="input-group">
                    <label className="form-label" htmlFor="id">ID:</label>
                    <input onChange={onChange} className="form-control" type="number" name="id" />
                </div>
                <button className="btn btn-primary ml-3" type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;