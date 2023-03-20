import { useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav=()=>{
    const navigate=useNavigate();
    const hospitalfunc=()=>{
        navigate("/hospitals");
    }
    return(
        <>
        <nav className="navbar">
                <div className="logo">
                    +
                </div>
                <div className="nav-side">
                    <div onClick={hospitalfunc} className="hospital">Hospital</div>
                    <div className="location">Location</div>
                    <button className="login-btn">Login</button>
                </div>
            </nav>
        </>
    )
}
export default Nav;