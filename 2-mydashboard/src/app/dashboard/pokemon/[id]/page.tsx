import { PokemonById } from "../../pokemons/interfaces/pokemoInterface";

interface PokemonPageProps {
  params: { id: string }
}

const getPokemonById = async (id: string): Promise<PokemonById> => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await fetch(pokemonUrl, { cache: 'force-cache' });
  const pokemon = await response.json();

  console.log(pokemon.name)

  return pokemon;
};

export const metadata = {
  title: "Pokemon by id",
  description: "description"
}

export default async function PokemonPage(props: PokemonPageProps) {

  const pokemon = await getPokemonById(props.params.id);

  return (
    <div>
      <h1>pokemon: {props.params.id}</h1>
      <hr />
      {
        JSON.stringify(pokemon)
      }
    </div>
  );
}