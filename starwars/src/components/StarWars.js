import React from "react";

const Individuals = ({data}) =>{
    const person = data.map((information) =>
    <div key={information}>
        <h1>{information.name}</h1>   
        <div>
            <p>Height: {information.height}</p>
            <p>Mass: {information.mass}</p>
            <p>Hair Color: {information.hair_color}</p> 
            <p>Skin Color: {information.skin_color}</p>
            <p>Eye Color: {information.eye_color}</p>
            <p>Birth Year: {information.birth_year}</p> 
            <p>Gender: {information.gender}</p>
        </div>
    </div> 
    )
    return(
        <div>
            {person}
        </div>
 
    )
};

export default Individuals;