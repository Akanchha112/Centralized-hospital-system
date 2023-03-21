// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../components/nav/Nav";
import "./index.css";
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from "react";
const EachHospital = () => {
    const [vis, setVis] = useState(false);
    useEffect(() => {
        // let element1 =document.getElementById("asset");
        // if (element1) {
        // element1.style.display="none";}
    });
    console.log(vis);
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
    const invenHandle = () => {
        setVis(true);
    }
    const inventories = [
        {
            name: "consumables",
            type: "medicine",
            model: 78,
            serialNumberL: 3849
        },
        {
            name: "apparatus",
            type: "tools",
            model: 38,
            serialNumberL: 3389
        }
        
    ]
    const assets = [{ item: "Hospital beds", quantity: 100, "asset_value": 200000 }, { item: "Operating room equipment", quantity: 5, "asset_value": 500000 }, { item: "Wheelchairs", quantity: 50, "asset_value": 25000 }, { item: "MRI machines", quantity: 2, "asset_value": 4000000 }]


    return (<>
        <Nav />
        <div className="map-location">
            <img src={location.state.ele.url} />
            <div className="map-location-info">
                <h2 >{location.state.ele.name}</h2>
                <div className="sub-info">
                    <div className="hospital-details">
                        <h3>Details</h3>
                        <p><span><em>Number of Doctors:</em></span> <span> {location.state.ele.numDoctors}</span></p>
                        <p><span><em>Number of ICU:</em></span> <span> {location.state.ele.numICU}</span></p>
                        <p><span><em>Total Rooms:</em></span> <span> {location.state.ele.totalRooms}</span></p>
                        <p><span><em>Address:</em></span> <span> {location.state.ele.address}</span></p>

                        <p><span><em>City:</em></span> <span> {location.state.ele.city}</span></p>
                        <p><span><em>Zip Code:</em></span> <span> {location.state.ele.zipCode}</span></p>
                        <p><span><em>Region:</em></span> <span> {location.state.ele.region}</span></p>
                        <p><span><em>Country:</em></span> <span> {location.state.ele.country}</span></p>
                        <p><span><em>Landmark:</em></span> <span> {location.state.ele.landmark}</span></p>
                    </div>
                    <div className="invetory">
                        <h3>Inventory</h3>
                        {inventories.map((ele) => {
                            return (
                                <p className="inven-head" onClick={() => invenHandle()}>
                                    <h4 >{ele.name}</h4>
                                    <div>{ele.type}</div>
                                </p>
                            )
                        })}
                    </div>
                </div>
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
        <div id="asset" style={{ display: vis ? 'block' : 'none' }}>
            <div className="assetContainer">
                <h3>Assets</h3>
                {assets.map((ele) => {
                    return (
                        <div>
                            {ele.item}:{ele.quantity}
                        </div>
                    )
                })}
                <div className="closeasset" onClick={() => setVis(false)}>close</div>
            </div>

        </div>
    </>
    );
};


export default EachHospital;