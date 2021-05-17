import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Axios = () => {

    const [allPokemon, setAllPokemon] = useState([])

    const getPokemon = (e) => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
            .then(res => {
                setAllPokemon(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, i) => {
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h3 className="card-title">{pokemon.name}</h3>
                        </div>

                    </div>
                })
            }

        </div>
    );
};


export default Axios;