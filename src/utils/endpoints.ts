// get pokemon data
export const GET_POKEMON_DATA = (offset: number, limit: number) => {
  return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
};
