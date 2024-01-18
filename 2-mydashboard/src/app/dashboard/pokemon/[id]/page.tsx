
interface PokemonPageProps {
  params: { id: string }
}

export default function PokemonPage(props: PokemonPageProps) {

  return (
    <div>
      <h1>pokemon: {props.params.id}</h1>
    </div>
  );
}