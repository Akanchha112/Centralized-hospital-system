import { useNavigate } from "react-router-dom";
import "./Nav.css";
import {FaHandHoldingMedical} from "react-icons/fa";
const Nav=()=>{
    const navigate=useNavigate();
    const hospitalfunc=()=>{
        navigate("/hospitals");
    }
    const loginHandle=()=>{
        navigate("/signin")
    }
    return(
        <>
        <nav className="navbar">
                <div className="logo">
                    <FaHandHoldingMedical/>
                </div>
                <div className="nav-side">
                    <div onClick={hospitalfunc} className="hospital">Hospital</div>
                    <div className="location">Location</div>
                    <button className="login-btn" onClick={loginHandle}>Login</button>
                </div>
            </nav>
        </>
    )
}
export default Nav;