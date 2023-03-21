import { Link, useLocation } from "react-router-dom";
import "./index.css";
import GoogleMapReact from 'google-map-react';
const EachHospital = () => {
    const location = useLocation();
    const lati=location.state.ele.latitude;
    const long=location.state.ele.longitude;
    const defaultProps = {
        center: {
          lat: lati,
          lng: long
        },
        zoom: 11
      };

    return (
        <div className="map-location">
            <div className="map-location-info">
                <h3>{location.state.ele.name}</h3>
                <p>Latitude: {location.state.ele.latitude}</p>
                <p>Longitude: {location.state.ele.longitude}</p>
                <p>Altitude: {location.state.ele.altitude}</p>
                <p>City: {location.state.ele.city}</p>
                <p>Zip Code: {location.state.ele.zipCode}</p>
                <p>Region: {location.state.ele.region}</p>
                <p>Country: {location.state.ele.country}</p>
                <p>Address: {location.state.ele.address}</p>
                <p>Landmark: {location.state.ele.landmark}</p>
                <p>URL: {location.state.ele.url}</p>
                <p>Number of Doctors: {location.state.ele.numDoctors}</p>
                <p>Number of ICU: {location.state.ele.numICU}</p>
                <p>Total Rooms: {location.state.ele.totalRooms}</p>
            </div>
            <div className="map-location-map" style={{ height: '40vh', width: '60%' }}>
            <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        </GoogleMapReact>
            </div>
        </div>
    );
};


export default EachHospital;