import React from 'react'
import { useContext, useState } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";  

const Form = () => {

  const { addOpinion } = useContext(VoteContext);
  const [newValues, setnewValues] = useState("");

  const inputOpinionChangeHandler = (e) => {
    console.log("value button add = " + e.target.value);
    setnewValues(e.target.value);
  } 

  const addOp = (event) => {
    event.preventDefault();
    addOpinion(newValues);
    console.log("value add " + newValues);
    setnewValues("");
  }

  return (
     <form onSubmit={addOp}>
        <div>
            <input value={newValues} onChange={inputOpinionChangeHandler} />
            <button type="submit" >Add Opinion</button>
        </div>     
      </form>
      
  );
}

export default Form;
