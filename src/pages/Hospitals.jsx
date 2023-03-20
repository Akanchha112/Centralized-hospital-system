<<<<<<< HEAD
/*import Nav from "../components/nav/Nav";
import "./Hospitals.css";

=======
import Nav from "../components/nav/Nav";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Asset } from "../Assets";
>>>>>>> 9a199dcdbcf14a793d2f90dc5d0be04c5e9f2c99
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
            {/* <div></div> searchbox dal dena *//*}

            
            <div className="hospital-card-container">
            {Asset.map((ele)=>{
                return(
                <div className="card" onClick={()=>hospitalCardHandle(ele)}>
                    <img src={ele.url} alt="" height="80px"/>
                    <div>
<<<<<<< HEAD
                        <h2>{ele.Name}</h2>
                        <p>{ele.Address}</p>
=======
                        {ele.name}
                        {ele.address}
>>>>>>> 9a199dcdbcf14a793d2f90dc5d0be04c5e9f2c99
                    </div>
                </div>
                )
            })}
            </div>
        </>
    )
}

export default Hospitals;

*/

/*new code*/

import Nav from "../components/nav/Nav";
import "./Hospitals.css";

const Hospitals = () => {
    const arr = [
        {
            Name: "asdf",
            Address: "12 rd new delhi",
            pic: "https://picsum.photos/200/300"
        },
        {
            Name: "asdf",
            Address: "12 rd new delhi",
            pic: "https://picsum.photos/200/300"
        },
        {
            Name: "asdf",
            Address: "12 rd new delhi",
            pic: "https://picsum.photos/200/300"
        }
    ];
    return (
        <>
            <Nav />
            {/* <div></div> searchbox dal dena */}
            <div className="hospital-card-container">
                {arr.map((ele) => {
                    return (
                        <div className="card">
                            <img src={ele.pic} alt="" height="80px" />
                            <div className="card-info">
                                <h2>{ele.Name}</h2>
                                <p>{ele.Address}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Hospitals;
