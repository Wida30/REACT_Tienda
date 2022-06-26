// import React, { useState, useEffect, createContext} from "react";
// import axios from "axios"

// export const SWContext = createContext();

// export const SWContextProvider = ({ children }) => {

//     const [vinos, setVinos] = useState([]);
//     // const [cervezas, setCervezas] = useState([]);
//     // const [users, setUsers] = useState([]);

//     useEffect (() => {
//         const getVinos = async () =>{
//             const vinosApi = await axios.get("http://localhost:5000/vinos");
//             setVinos(vinosApi.data.vinos);
//             console.log(setVinos)
//         };
//         getVinos();
//     }, []);

//     return (
//     <SWContextProvider value={{ vinos }}>
//         {children}
//     </SWContextProvider>
//     )


// }