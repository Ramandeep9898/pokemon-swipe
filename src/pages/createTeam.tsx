import { Swiper } from "@/components/Swiper/Swiper";
import useGetPokemonDataQuery from "@/hooks/queries/useGetPokemonDataQuery";

const CreateTeam = () => {
  const { data, error, isLoading } = useGetPokemonDataQuery(1, 20);

  console.log("data", data);
  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Swiper data={data.results} />
    </div>
  );
};

export default CreateTeam;
