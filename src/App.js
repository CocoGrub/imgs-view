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
  return (
    <div className="App">
      <header className="App-header">
        <h1>hi</h1>
        {photos.map((element, index) => {
          return (
            <div key={index}>
              <Card photo={element} />;
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
