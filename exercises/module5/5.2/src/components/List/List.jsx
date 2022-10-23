
import React from 'react'
import { useContext } from "react";
import { Context as VoteContext } from "../../contexts/VoteContext";
import Vote from '../Vote/Vote';


function List() {

    const { opinions} = useContext(VoteContext);

    return (
        <div>
           <ul>
        {opinions?.map(opinion => 
           <Vote key={opinion.id} id={opinion.id} name={opinion.name} vote={opinion.vote}/>
         )}
        </ul>
        </div>
    )
}

export default List;
