import React, { useEffect, useState } from 'react';
import './Pokedex.css';
import API from "../../utils/API";
import PokemonList from "../../components/PokemonList";
import PaginationButtons from "../../components/PaginationButtons";

export default function PokedexContainer() {
  
  const [results, setResults] = useState([]);
  const [pageState, setPageState] = useState({
      next: "",
      previous: ""
  });

  function fetchPokemon(url) {
    API.getPokemon(url)
    .then(({ data }) => {
        console.log(data)
        setResults(data.results);
        setPageState({
            next: data.next,
            previous: data.previous
        });
    })
    .catch(err => console.log(err));
  }

  function handlePageChange(direction) {
      if (direction === "next") {
        fetchPokemon(pageState.next);
      } else if (direction === "previous") {
        fetchPokemon(pageState.previous);
      } 
  }

  useEffect(() => {
      fetchPokemon();   
  }, []);

  return (
    <div>
        {/* render a list of pokemon */}
        <PokemonList list={results}/>
        <PaginationButtons handlePageChange={handlePageChange} />
    </div>
  );
}
