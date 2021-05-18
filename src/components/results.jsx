import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Results = props => {
    // http://https://pokeapi.co/api/v2/
    console.log(props.name);
    const [res, setRes] = useState({});
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then(response => setRes(response.data))
        // .then(response => console.log(response.data.pokemon))
    }, [props])
    const back = () => {
        navigate("/")
    }
    return (
        <div className="row">
            <div className="col-7 border border-rounded border-secondary shadow ml-5 mt-5 ">
                <h1 className="ml-1">Test from Results</h1>
                <p className="text-info">Pokemon:{res.pokemon}</p>
                <img srcset={`https://pokeapi.co/api/v2/pokemon/sprites/${props.name.sprite}.png`} alt="pokemon"></img>
                <p className="text-info">Name: {res.name}</p>
                <p className="text-info">Base Experience: {res.base_experience}</p>
                <p className="text-info">Height: {res.height} ft.</p>
                <p className="text-info">Weight: {res.weight} lbs.</p>
                <p className="text-info">Weight: {res.location_area_encounters} </p>

                <div className="form-group-2 mt-5 text-right p-3">
                    <button type="button" className="btn btn-primary shadow border border-rounded " value="back" onClick={back}>Back</button>
                </div>
            </div >
        </div>
    );
}
export default Results;