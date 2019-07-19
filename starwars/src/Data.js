import React, {useState, useEffect} from "react";
import axios from "axios";
import Individuals from "./components/StarWars.js"

function Data(){
    const [data, setData] = useState([]);

    //use Effect is allowing us to locate the api. Once we find our api we index into the array where the dataset we want to work with is located.
    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then (info =>{
            setData(info.data.results)
        })
        .catch(error => {
            return "Storm Troopers Win"
        });
    }, []);
    console.log(data)
    
    //Over here we return the Individuals which is found in the StarWars.js file. The prop here is "data" which is now an index of the data we want to work with. The function takes this information and returns each Star Wars Character that is available to us in the api.
    return (
        <div>
            <Individuals data={data}/>
        </div>
    )
};

export default Data;