import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemon-card";

type Pokemon = {
    name: string;
    url: string;
};

export  const PokemonList = () => {

  const [pokemons, setpokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/").then((response)=> 
      response.json().then((data) => {
        console.log(data)
        setpokemons(data.results)
      })
    )
  }, [])

    return (
      <div className="grid grid-cols-12 gap-4 mt-8">
        {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url}/>
        ))}
        </div>
    )
}