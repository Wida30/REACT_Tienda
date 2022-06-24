// import React, { useState, useEffect, createContext} from "react";
// import axios from "axios"

// export const SWContext = createContext();

// export const SWContextProvider = ({ children }) => {

//     const [vinos, setVinos] = useState([]);
//     // const [cervezas, setCervezas] = useState([]);
//     // const [users, setUsers] = useState([]);

//     useEffect (() => {
//         const getVinos = async () =>{
//             const vinosApi = await axios.get("https://opentdb.com/api.php?amount=10&category=9&type=boolean");
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