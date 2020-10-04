import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchPhotos } from "../src/api/api";
import Card from "../src/components/card";


function App() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetchPhotos().then((res) => {
            setPhotos(res.photos.photo);
        });
    }, []);
    console.log(photos);
    return ( <div className = "App" >
           <div className={'masonry'}>
                {photos.map((element, index) => {
                return ( <div className={'item'} key = { index } >
                    <Card photo = { element }/> </div>
                );
            })
        } </div> </div>
);
}

export default App;