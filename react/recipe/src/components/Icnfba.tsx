import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Icnfba() {
    const [theJoke, setTheJoke] = useState("The Axios Joke");
    const [nextJoke, setNextJoke] = useState(false);
    useEffect(() => {
        // const fetchData =async () => {
        //     //const result = await axios('http://api.icndb.com/jokes/random',);
        //     const {data} = await axios('http://api.icndb.com/jokes/random',);
        //     setTheJoke(data.value.joke);
        // }
        // fetchData();
        (
            async () => {
                const { data } = await axios('http://api.icndb.com/jokes/random',);
                setTheJoke(data.value.joke);
            }
        )();
    }, [nextJoke]);
    return (
        <>
            <h1>Axios get joke</h1>
            <div>{theJoke}</div>
            <button type="button" 
            className="btn btn-info"
            onClick={()=>{setNextJoke(!nextJoke);}}
            >Next joke</button>
        </>
    );
}
