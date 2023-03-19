import {BrowserRouter, Route , Routes} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Hospitals from "./pages/Hospitals.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/hospitals" element={<Hospitals />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
