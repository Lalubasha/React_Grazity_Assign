import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: null };
  }

  async componentDidMount() {
    if ("geolocation" in navigator) {
      try {
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      } catch (error) {
        console.error("Error getting location: " + error.message);
      }
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  render() {
    const { location } = this.state;
    return (
      <div>
        {location ? (
          <div className='Task'>
          <h1 >Task3</h1>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Location;
