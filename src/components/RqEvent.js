import React from "react";
import { useQuery } from "react-query";
import axios from "axios";


const RqEvent = () => {

    const fetchEvents = () => {
        return axios.get('http://localhost:5000/events')
    }

    const { isLoading, data } = useQuery('events', fetchEvents)

    if (isLoading) {
        return <h3>On the Way...</h3>
    }

    return (
        <>
            <h2>my Hangout Places Are </h2>
            {
                data.data.map((eve) => {
                    return <div key={eve.action}>{eve.action}</div>
                })
            }

        </>
    )
}

export default RqEvent;

