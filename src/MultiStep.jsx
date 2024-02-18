import { createContext,useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Add from "./components/Add";
import Finish from "./components/Finish";


export const userContext = createContext({
    toggle:true,
    toggleOn: () =>{}
});

const MultiStep = () =>{

    const [toggle,setToggle] = useState(false);

    const toggleOn = () =>{
        setToggle((prev)=>!prev)
        
    }



    return(
        <userContext.Provider value={{toggle,toggleOn}}>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route index element={<Home/>}/>
                        <Route path="/select" element={<Select/>}/>
                        <Route path="/finish" element={<Finish/>}/>
                        <Route path="/add" element={<Add/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </userContext.Provider>
    )
}
export default MultiStep