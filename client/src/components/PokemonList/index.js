import React from "react";
import PokemonListItem from "../PokemonListItem";

export default function PokemonList ({ list }) {
    
    return (
        <ul>
            {list.map((listItem, index) => {
               return <PokemonListItem {...listItem} key={index}/>
            })}
        </ul>
    )
}