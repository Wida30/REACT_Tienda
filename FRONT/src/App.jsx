import "./App.scss";
import Navegador from "../src/core/Navegador";
// import { SWContextProvider } from "./context/context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Vinos from "../src/pages/Vinos/Vino";
import Cervezas from "../src/pages/Cervezas/Cervezas";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";

function App() {
  return (
    <>
      {/* <SWContextProvider> */}
        <Router>
          <div className="App">
            <Navegador />

            <p>hola</p>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vinos" element={<Vinos />} />
              <Route path="/cervezas" element={<Cervezas />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      {/* </SWContextProvider> */}
    </>
  );
}

export default App;
