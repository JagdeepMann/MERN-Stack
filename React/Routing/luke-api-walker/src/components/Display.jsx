import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Display = (props) => {

    //State Variables
    const[info, setInfo]=useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
        .then(res => {
            console.log(`***********`);
            console.log(res.data);
            console.log(`***********`);
            setInfo(res.data);
            })
        .catch(err => console.log(err));
    }, [props.category, props.id]);

    
    return (
        <div>
            <h1>{info.name}</h1>
            {
                props.category === "people"?
                <>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                    <h3>Hair color: {info.hair_color}</h3>
                    <h3>Skin color: {info.skin_color}</h3>
                </>:
                props.category === "planets"?
                <>
                    <h3>Climate: {info.climate}</h3>
                    <h3>Terrain: {info.terrain}</h3>
                    <h3>Surface water: {info.surface_water}</h3>
                    <h3>Population: {info.population}</h3>
                </> : ""

            }

        </div>
    );
};



export default Display;