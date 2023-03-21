import { Link, useLocation } from "react-router-dom";
import Nav from "../components/nav/Nav";
import "./index.css";
import GoogleMapReact from 'google-map-react';
const EachHospital = () => {
    const location = useLocation();
    const lati = location.state.ele.latitude;
    const long = location.state.ele.longitude;
    const defaultProps = {
        center: {
            lat: lati,
            lng: long
        },
        zoom: 11
    };

    return (<>
        <Nav />
        <div className="map-location">
            <img src={location.state.ele.url} />
            <div className="map-location-info">
                <h2 >{location.state.ele.name}</h2>
                
                <p><span><em>Number of Doctors:</em></span> <span> {location.state.ele.numDoctors}</span></p>
                <p><span><em>Number of ICU:</em></span> <span> {location.state.ele.numICU}</span></p>
                <p><span><em>Total Rooms:</em></span> <span> {location.state.ele.totalRooms}</span></p>
                <p><span><em>Address:</em></span> <span> {location.state.ele.address}</span></p>
                <p><span><em>Latitude:</em></span> <span> {location.state.ele.latitude}</span></p>
                <p><span><em>Longitude:</em></span> <span> {location.state.ele.longitude}</span></p>
                <p><span><em>Altitude:</em></span> <span> {location.state.ele.altitude}</span></p>
                <p><span><em>City:</em></span> <span> {location.state.ele.city}</span></p>
                <p><span><em>Zip Code:</em></span> <span> {location.state.ele.zipCode}</span></p>
                <p><span><em>Region:</em></span> <span> {location.state.ele.region}</span></p>
                <p><span><em>Country:</em></span> <span> {location.state.ele.country}</span></p>
                <p><span><em>Landmark:</em></span> <span> {location.state.ele.landmark}</span></p>
                <button>Inventory</button>
            </div>
            <div className="map-location-map" style={{ height: '100vh', width: '60%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
        </>
    );
};


export default EachHospital;