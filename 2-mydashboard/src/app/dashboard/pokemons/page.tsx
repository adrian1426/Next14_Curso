import Image from "next/image";
import { PokemonResponse, SimplePokemon } from "./interfaces/pokemoInterface";
import { PokemonGrid } from "./components/PokemonGrid";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonResponse = await response.json();

  const pokemons = data.results.map(p => {
    const id = p.url.split('/').at(-2)!;

    return {
      id,
      name: p.name
    }
  });

  return pokemons;
};

export default async function PokemonPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pókemons <small>estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}