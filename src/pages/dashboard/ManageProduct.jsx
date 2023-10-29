import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";
import UseRecipies from "../../hooks/UseRecipies";
import RecipieDash from "../../components/RecipieDash";

const ManageProduct = () => {
  //   const { data, isLoading, isFetching } = useQuery({
  //     queryKey: ["recipies"],
  //     queryFn: async () => {
  //       const data = await fetch("http://localhost:5000/recipies");
  //       return await data.json();
  //     },
  //   });

  const { data, isLoading, isFetching, refetch } = UseRecipies();

  if (isLoading == true) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Title>Total {data.length} Recipies Found</Title>
      <div className="grid grid-cols-1 gap-5">
        {data.map((recipie) => (
          <RecipieDash
            refetch={refetch}
            key={recipie._id}
            recipie={recipie}
          ></RecipieDash>
        ))}
      </div>
    </div>
  );
};
export default ManageProduct;
