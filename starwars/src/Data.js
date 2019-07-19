import React, {useState, useEffect} from "react";
import axios from "axios";

function Data(){
    const [data, setData] = useState([]);

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
    
    return (
        <div>

        </div>
    )
};

export default Data;