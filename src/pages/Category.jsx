import React from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Title from "../components/Title";
import Loading from "./Loading";
import FoodCard from "../components/FoodCard";

const Category = () => {
  const { category } = useParams();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const { foods, categoryInfo } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto pt-10 pb-5">
      <Title>{category}</Title>

      <div className="pt-5">{categoryInfo.strCategoryDescription}</div>
      {foods.length > 0 ? (
        <div>
          <h2 className="text-5xl pt-8">
            <span className="font-bold text-orange-500">{foods.length} </span>
            Recipies Found in this Category
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-5xl pt-8">NO Recipies Added Right Now</h2>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 py-8 gap-5">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
