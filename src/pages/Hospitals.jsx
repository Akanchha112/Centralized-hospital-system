import Nav from "../components/nav/Nav";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Asset } from "../Assets";
const Hospitals = () => {
    const navigate=useNavigate();
    const hospitalfunc=()=>{
        navigate("/hospitals");
    }
    
    
    const hospitalCardHandle=(ele)=>{
        navigate("/EachHospital", {state:{ele:ele}});
    }
    return (
        <>
            <Nav />
            {/* <div></div> searchbox dal dena */}
            <div className="hospital-card-container">
            {Asset.map((ele)=>{
                return(
                <div className="Hospitalcard" onClick={()=>hospitalCardHandle(ele)}>
                    <img src={ele.url} alt="" height="80px"/>
                    <div>
                        <span><h3>{ele.name}</h3> </span>
                        {ele.address}
                    </div>
                </div>
                )
            })}
            </div>
        </>
    )
}

export default Hospitals;