import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Notfound from "./Notfound/Notfound";

function App() {
  return (<div>
      <div className="w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
