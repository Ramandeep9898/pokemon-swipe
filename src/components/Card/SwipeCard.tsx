import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import useGetPokemonByUrlQuery from "../../hooks/queries/useGetPokemonByUrlQuery";
// import { Badge } from "../Badge/Badge";

type SwipeCardPropTypes = {
  url: string;
  name: string;
};

export const SwipeCard = ({ data }: any) => {
  //   const {
  //     data: pokemonDetails,
  //     error,
  //     isLoading,
  //   } = useGetPokemonByUrlQuery(data.url);
  //   console.log("hi", pokemonDetails);

  //   const displayConfig = {
  //     name: { show: true, label: "Name" },
  //     base_experience: { show: true, label: "Base Experience" },
  //     height: { show: true, label: "Height" },
  //     weight: { show: true, label: "Weight" },
  //     types: { show: true, label: "Types" },
  //     abilities: { show: true, label: "Abilities" },
  //     moves: { show: true, label: "Moves" },
  //     past_abilities: { show: false, label: "Past Abilities" },
  //     cries: { show: false },
  //     form: {
  //       show: true,
  //       label: "Form",
  //     },
  //     game_indices: {
  //       show: false,
  //     },
  //     held_items: {
  //       show: false,
  //     },
  //   };

  //   const filteredKeys = Object.keys(displayConfig).filter(
  //     (key) => displayConfig[key].show
  //   );

  //   const extractNumber = (url: string) => {
  //     const regex = /\/(\d+)\//;
  //     const match = url.match(regex);

  //     if (match) {
  //       return parseInt(match[1], 10);
  //     }

  //     return null;
  //   };
  //   const index = extractNumber(data.url);

  //   if (isLoading) {
  //     return <>loading...</>;
  //   }

  return (
    <Card className="absolute flex flex-col w-[300px] h-[150px] justify-center ">
      <CardHeader className="flex items-center">
        <img
          style={{ width: "50px" }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
        />
        <CardTitle>{data.name}</CardTitle>
      </CardHeader>
      {/* <CardContent>
          <div className="flex gap-1 flex-col ">
            <p>Abilities:</p>
            <div className="flex gap-1">
              {pokemonDetails.abilities.map((ele) => (
                <Badge variant={"outline"} name={ele.ability.name} />
              ))}
            </div>
          </div>
        </CardContent> */}
    </Card>
  );
};
