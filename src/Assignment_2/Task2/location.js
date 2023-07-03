import React, { useState, useEffect } from 'react';

function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        function (error) {
          console.error("Error getting location: " + error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {location ? (
        <div className='Task'>
        
          <h1 >This is Task2</h1>
          <p >Latitude: {location.latitude}</p>
          <p >Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Location;
