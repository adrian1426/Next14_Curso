
const getPokemons = async (limit = 20, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  return data;
};

export default async function PokemonPage() {

  const pokemons = await getPokemons();

  return (
    <div>
      <h1>Pokemon Page</h1>
      <hr />
      {
        JSON.stringify(pokemons)
      }
    </div>
  );
}