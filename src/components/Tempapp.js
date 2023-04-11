import React, { useEffect, useState } from "react";
import "./css/style.css";
import { FaStreetView } from 'react-icons/fa';

const Tempapp = () =>{

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0d4a4e512428c4c502c3267643ecb59`
            const response = await fetch(url)
            const resJson=await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                        type="search"
                        className="inputField"
                        on onChange={(event)=>{
                            setSearch(event.target.value)
                        }}
                    />
                </div>
            {!city ? (
                <p className="error">No Data Found</p>
            ):(
                <div>
                <div className="info">
                        <h2 className="location">
                        <FaStreetView />{search}
                        </h2>
                        <h1 className="temp">
                        {city.temp}
                        </h1>
                        <h3 className="tempmin_max">Min : {city.temp_min} | Max : {city.temp_max}</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
            )}
            </div>
        </>
    )
}
export default Tempapp;