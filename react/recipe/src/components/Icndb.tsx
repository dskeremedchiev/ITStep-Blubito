import React, { useEffect, useState } from 'react';
// fetch API
// XML HTTP REQUEST
// AXIOS 

export default function Icndb() {
    const [theJoke, setTheJoke] = useState("The joke");
    // 1st way - use 2 promices 
    // useEffect(() => {
    //     fetch('http://api.icndb.com/jokes/random')
    //     .then(x=>x.json())
    //     .then(result => setTheJoke(result.value.joke))
    // },[]);
    // 2nd way - use async/await
    useEffect( () =>{
        const fetchData =async () => {
            const result = await fetch('http://api.icndb.com/jokes/random').then(x=>x.json());
            setTheJoke(result.value.joke);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Chuck Norris joke</h1>
            <div>{theJoke}</div>
        </>);
}
