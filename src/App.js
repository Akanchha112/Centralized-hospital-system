import {BrowserRouter, Route , Routes} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Hospitals from "./pages/Hospitals.jsx";
import EachHospital from "./pages/EachHospital.jsx";
import Login from "./pages/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/hospitals" element={<Hospitals />}/>
        <Route path="/eachHospital" element={<EachHospital />}/>
        <Route path="/signin" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
