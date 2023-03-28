import React, { useState } from "react";
import NoteContext from "./noteContext";

const Notestate = (props) => {

    const s1 = {
        "name": "jayesh",
        "age":"20"
    }
    const [s, setS] = useState(s1);
    const update = ()=>{
        setTimeout(
            ()=>{setS({"name":"SDF", "age":"49"});},2000
        );
    }
  return( 
  <NoteContext.Provider value={{s, update}}>
    {props.children}
  </NoteContext.Provider>
  )
};

export default Notestate;
