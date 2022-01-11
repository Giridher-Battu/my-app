import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

const College = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/colleges').then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h3>OntheWay Sir...</h3>
    }

    return (
        <>
            <h2>Our Campus list</h2>
            {data.map((clg) => {
                return <div id={clg.name}>{clg.name}</div>
            })}
        </>
    )
}

export default College;