import { useQuery } from "@tanstack/react-query";

const UseRecipies = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["recipies"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/recipies");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default UseRecipies;
