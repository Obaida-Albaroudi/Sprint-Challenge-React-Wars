import React from "react";
import {Card, Content} from "./Styling.js";


const Individuals = ({data}) =>{
    //I map over the prop data here, which is an array of star wars characters.
    //For each index of the array there is an object so I find the specific data points I need in the objects by indexing there using the keys.
    const person = data.map((information) =>
    <Card>
        <h1>{information.name}</h1>   
        <div>
            <Content>Height: {information.height}</Content>
            <Content>Mass: {information.mass}</Content>
            <Content>Hair Color: {information.hair_color}</Content> 
            <Content>Skin Color: {information.skin_color}</Content>
            <Content>Eye Color: {information.eye_color}</Content>
            <Content>Birth Year: {information.birth_year}</Content> 
            <Content>Gender: {information.gender}</Content>
        </div>
    </Card> 
    )
    //Over here I just return person as it represents each iteration of the array which is an object which is a person.
    return(
        <div>
            {person}
        </div>
 
    )
};

export default Individuals;