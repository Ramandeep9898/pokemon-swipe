import { GET_POKEMON_DATA } from "@/utils/endpoints";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonDataQuery = (
  limit: number,
  offset: number,
  options?: any
) => {
  const getVendorAvailabilityProbabilistic = async () => {
    const response = await fetch(GET_POKEMON_DATA(limit, offset));
    return response.json();
  };

  return useQuery({
    queryKey: ["getPokemonData", limit, offset],
    queryFn: getVendorAvailabilityProbabilistic,
    ...options,
  });
};

export default useGetPokemonDataQuery;
