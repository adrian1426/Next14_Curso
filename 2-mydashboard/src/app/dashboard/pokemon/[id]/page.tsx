import { Metadata } from "next";
import { PokemonById } from "../../pokemons/interfaces/pokemoInterface";

interface PokemonPageProps {
  params: { id: string }
}

const getPokemonById = async (id: string): Promise<PokemonById> => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await fetch(
    pokemonUrl,
    {
      cache: 'force-cache',
      next: {
        revalidate: 60 * 60 * 30 * 6
      }
    }
  );
  const pokemon = await response.json();

  return pokemon;
};

export async function generateMetadata({ params }: PokemonPageProps): Promise<Metadata> {
  const { id, name } = await getPokemonById(params.id);

  return {
    title: `${id} - ${name}`,
    description: `Página del pokemon ${name}`
  }
}

export default async function PokemonPage(props: PokemonPageProps) {

  const pokemon = await getPokemonById(props.params.id);

  return (
    <div>
      <h1>pokemon: {props.params.id}</h1>
    </div>
  );
}