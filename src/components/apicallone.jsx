import React, { useState } from "react";

export default function apicallone(){


    const[data,setdata]=useState([])

     const handlefetch=async () =>{
        let res=await fetch("https://fakestoreapi.com/products/1")
        let fullres=await res.json()
        setdata(fullres)
        // console.log(fullres);
    }


    return(
        <div>
            
            <h1>api call work</h1>
            <button onClick={handlefetch}>call api</button>

            {data.map((da, i) => (
                <div>
                   <h1>{da.title}</h1>
                </div>
            ))}
        </div>
    )
        
}