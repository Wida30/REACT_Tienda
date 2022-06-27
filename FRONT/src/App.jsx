import "./App.scss";
import Navegador from "../src/core/Navegador";
// import { SWContextProvider } from "./context/context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../src/pages/Home/Home";

import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
import { RequireAuth } from "./components/RequireAuth";
import { JwtContext } from "./context/jwtContext";
import { useState } from "react";

import Cervezas from "./pages/Cervezas/Cervezas";
import Vino from "./pages/Vinos/Vino";
import CervezaDetail from "./components/Todascervezas/CervezaDetail";
import VinoDetail from "./components/Todosvinos/VinoDetail";


function App() {

  const [jwt, setJwt] = useState(null);
  return (
    <>

    <JwtContext.Provider value={{jwt, setJwt}}>
      {/* <SWContextProvider> */}
        <Router>
          <div className="App">
            <Navegador />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vinos" element={ <RequireAuth> <Vino /></RequireAuth>} />
              <Route path="/vinos/:id" element={ <RequireAuth> <VinoDetail /></RequireAuth>} />
              <Route path="/cervezas" element={ <RequireAuth> <Cervezas /> </RequireAuth>} />
              <Route path="/cervezas/:id" element={ <RequireAuth> <CervezaDetail /> </RequireAuth>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      {/* </SWContextProvider> */}
      </JwtContext.Provider>
    </>
  );
}

export default App;
