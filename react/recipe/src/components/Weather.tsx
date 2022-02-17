import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classTest from './classTest';
export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("Weather will be shown here");
    // your code goes here - useEffect + AXIOS/ FETCH
    //https://www.metaweather.com/api/location/search/?query=san%20francisco - CORS BLOCK
    //https://meta-weather.vercel.app/api/location/search/ - Working
    //https://meta-weather.vercel.app/api/location/839722/ - Working
    useEffect(() => {
        (async () => {
            if (city) {
                //const {data} = await axios('https://meta-weather.vercel.app/api/location/839722/');
                let response = await axios('https://meta-weather.vercel.app/api/location/search/?query=' + city);
                //return;
                const { data } = await axios.get<classTest>('https://meta-weather.vercel.app/api/location/' + response.data[0].woeid + '/');
                console.log(data);
                //setWeather("city name:" + data.title + " " + data.tralala);
                setWeather(`city name: ${data.title} ${data.tralala}`);
            } else {
                setWeather("Enter city name to get results");
            }
        }
        )();

    }, [city]);
    return (
        <>
            <input type="text" className="form-control" id="floatingInput" placeholder="enter city"
                onChange={(e) => setCity(e.target.value)} />
            <h1>{city} weather</h1>
            <div>{weather}</div>
        </>
    );
}
