import Nav from "../components/nav/Nav";
import { useNavigate } from "react-router-dom";
import "./index.css";

//icons
import {GiHospital} from 'react-icons/gi';
import {MdInventory} from 'react-icons/md';
import {MdOutlineInventory} from 'react-icons/md';
import {RiStethoscopeFill} from 'react-icons/ri'

const Landing = () => {
    const navigate=useNavigate();
    const hospitalfunc=()=>{
        navigate("/hospitals");
    }
    return (
        <>
            <Nav />
            <header>
                <div className="header-text">
                    <h3>Connecting HealthCare Nationwide </h3>
                    <h2>Making Inventory Management Easy</h2>
                    <h4>Just one click away from all your inventory management</h4>
                    <button onClick={hospitalfunc}>View Hospitals</button>
                </div>
                <div className="header-illustration">
                    <img src="./images/headillust.png" alt="headillust" />
                </div>
            </header>
            <section className="stats-count">
                <div>
                    <h2>201</h2>
                    <h4>Hospitals</h4>
                </div>
                <div>
                    <h2>500</h2>
                    <h4>Inventories</h4>
                </div>
                <div>
                    <h2>5000+</h2>
                    <h4>Stocks</h4>
                </div>
                <div>
                    <h2>6</h2>
                    <h4>Doctors</h4>
                </div>
            </section>

            <section className="our-services">
                  <h3>Our Services</h3>
                  <h2>Services For Your Convineince</h2>
                  <div className="cardSection">
                    
                  <div className="card">
                        <div className="icon">
                        <GiHospital size={60} />
                            </div>
                        <h3>Hospital</h3>
                  </div>
                  <div className="card">
                    <div className="icon">
                        <MdInventory size={60}/>
                        </div>
                        <h3>Inventory</h3>
                  </div>
                  <div className="card">
                    <div className="icon">
                    <MdOutlineInventory size={60}/>
                    </div>
                       
                        <h3>Stock</h3>
                  </div>
                  <div className="card">
                    <div className="icon">
                    <RiStethoscopeFill size={60}/>
                    </div>
                        
                        <h3>Doctors</h3>
                  </div>
                  </div>
            </section>

            
        </>
    );
}
//rgb(16 179 181)
export default Landing;