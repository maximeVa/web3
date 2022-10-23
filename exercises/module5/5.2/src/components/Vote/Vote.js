import React from 'react'
import { useContext } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";    

function Vote(props) {
    const id = props.id;
    const name = props.name;
    const vote = props.vote;

    const {increaseOpinion } = useContext(VoteContext);
    return (
        <div>
            {name} : {vote} 
            <button value={id} onClick={increaseOpinion}>Vote</button>
        </div>
    )
}

export default Vote