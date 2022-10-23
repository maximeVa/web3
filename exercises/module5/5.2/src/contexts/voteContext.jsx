import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([]);

  const increaseOpinion = (opinion) => {    
    const id = opinion.target.value; // recup l'id
    const index = opinions.findIndex(opinion => opinion.id === id); // recup l'index
    const vote = opinions[index].vote; // recup le vote
    console.log("id = " + id);
    console.log("index = " + index);
    console.log("vote = " + vote);
    
    let newArr = [...opinions]; // copie le tableau
    newArr[index].vote = vote + 1; // modifie le vote
    setOpinions(newArr); // met a jour le tableau
  };

  const addOpinion = (event) => {
    //event.preventDefault() retirer car si laisse ne fonctionne pas.. sait pas pq
    const opinionObject = {
      id: uuid(),
      name: event,
      vote: 1
    }
    setOpinions(opinions.concat(opinionObject)) 
  }

  return (
    <Context.Provider
      value={{
        opinions,
        increaseOpinion,
        addOpinion,
      }}
    >
      {props.children}
    </Context.Provider>
  );

    }
export { Context, ProviderWrapper };