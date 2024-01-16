export interface PokemonResponse {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}


export interface SimplePokemon {
  id: string;
  name: string;
}