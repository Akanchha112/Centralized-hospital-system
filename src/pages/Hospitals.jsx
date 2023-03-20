import Nav from "../components/nav/Nav";
import "./index.css";

const Hospitals = () => {
    const arr = [{
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
    },
    ]
    return (
        <>
            <Nav />
            {/* <div></div> searchbox dal dena */}
            <div className="hospital-card-container">
            {arr.map((ele)=>{
                return(
                <div className="card">
                    <img src={ele.pic} alt="" height="80px"/>
                    <div>
                        {ele.Name}
                        {ele.Address}
                    </div>
                </div>
                )
            })}
            </div>
        </>
    )
}

export default Hospitals;