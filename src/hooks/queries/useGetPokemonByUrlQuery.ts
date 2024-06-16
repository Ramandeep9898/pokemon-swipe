import { useQuery } from "@tanstack/react-query";

const useGetPokemonByUrlQuery = (pokemonUrl: string, options = {}) => {
  const fetchPokemonByUrl = async () => {
    const response = await fetch(pokemonUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  return useQuery({
    queryKey: ["getPokemonByUrl", pokemonUrl],
    queryFn: fetchPokemonByUrl,
    ...options,
  });
};

export default useGetPokemonByUrlQuery;
