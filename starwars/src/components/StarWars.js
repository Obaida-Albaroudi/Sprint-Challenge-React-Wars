import React from "react";
import {Card, Content} from "./Styling.js";

const Individuals = ({data}) =>{
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
    return(
        <div>
            {person}
        </div>
 
    )
};

export default Individuals;