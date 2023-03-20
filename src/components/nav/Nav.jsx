import { useNavigate } from "react-router-dom";
const Nav=()=>{
    const navigate=useNavigate();
    const hospitalfunc=()=>{
        navigate("/hospitals");
    }
    return(
        <>
        <nav>
                <div className="logo">
                    logo
                </div>
                <div className="nav-side">
                    <div onClick={hospitalfunc}>Hospital</div>
                    <div>Location</div>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}
export default Nav;