import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllAuthors = () => {

    const[allAuthors, setAllAuthors] = useState([]);
    const[deleteClicked, setDeleteClicked] = useState(0); 

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/")
        .then(res => {
            console.log(`***********`);
            console.log(res);
            console.log(`***********`);
            setAllAuthors(res.data.results);
        })
        .catch(err => console.log(err));
    }, [deleteClicked]);

    const deleteHandler =(e, authorId)=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
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
            <Link to ="/authors/create">Add an author</Link>
            <h3>We have quotes by:</h3>
            {
                allAuthors.map((author, i)=>{
                    return(
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td><Link to={`/authors/update/${author._id}`} className="btn btn-warning">Edit</Link></td> | 
                            <td><Link onClick={(e)=>deleteHandler(e, author._id)} to={`#!`} className="btn btn-danger">Delete</Link></td>
                        </tr>
                    );
                })
            }
        </div>
    );
};


export default AllAuthors;