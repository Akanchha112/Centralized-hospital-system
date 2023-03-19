import Nav from "../components/nav/Nav";
import "./index.css";
const Landing = () => {
    return (
        <>
            <Nav/>
            <header>
                <div className="header-text">
                    <h3>Connecting HealthCare Nationwide </h3>
                    <h2>Making Inventory Management Easy</h2>
                    <h4>Just one click away from all your inventory management</h4>
                    <button>View Hospitals</button>
                </div>
                <div className="header-illustration">
                    <img src="./images/headillust.png" alt="headillust" />
                </div>
            </header>
            <section className="stats-count">
                <div>
                    <h2>201</h2>
                    <h4>hospitals</h4>
                </div>
                <div>
                    <h2>500</h2>
                    <h4>inventories</h4>
                </div>
                <div>
                    <h2>5000+</h2>
                    <h4>stocks</h4>
                </div>
                <div>
                    <h2>6</h2>
                    <h4>Doctors</h4>
                </div>
            </section>
        </>
    );
}
//rgb(16 179 181)
export default Landing;