import Image from "next/image";
import { PokemonResponse, SimplePokemon } from "./interfaces/pokemoInterface";

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
      <div className="flex flex-wrap  gap-10 items-center justify-center">
        {
          pokemons.map(pokemon => (
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
          ))
        }
      </div>
    </div>
  );
}