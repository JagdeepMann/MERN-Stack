import React, {useState, useEffect} from 'react';


const Fetch = () => {
    
    const [pokemon, setPokemon]=useState([]);

    const clickHandler=() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json();
        }).then(response => {
            // Key name should match to the one in th API json file
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div>
            <button onClick={clickHandler} >Fetch Pokemon</button>
            
                {
                    pokemon.map((result, idx)=>{
                        return <div key={idx}>
                            {result.name}
                        </div>
                    })
                }

        </div>
    );
};



export default Fetch;
