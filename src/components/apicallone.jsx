import React, { useEffect, useState } from 'react'

export default function ApiCallOne() {
    const [data, setdata] = useState([])
    const[count,setcount] = useState(0)

    const handlefetch = async () => {
        let res = await fetch('https://fakestoreapi.com/products/')
        let fullres = await res.json()
        setdata(fullres)
        console.log("luffy");

    }

    useEffect(() => {
        handlefetch()
            console.log("HEY LUFFY");

        return () => {
            console.log("HEY ARUN");

        }

    }, [count])


    const handleadd = () =>{
        setcount(count+1)
    }

    return (
        <div>
            <h1>api call</h1>
            <h1>{count}</h1>

            <button onClick={handleadd}>add</button>

            <div className='prowarp'>
                {data.map((da, i) => (
                    <div key={i}>
                        <div className='cardpro'>
                            <img src={da.image} height={200} width={200} />
                            <h1 >{da.title}</h1>
                            <h3>Price : {da.price}</h3>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}