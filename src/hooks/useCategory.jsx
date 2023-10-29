import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/categories");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};
export default useCategory;
