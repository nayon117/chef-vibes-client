import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseRecipies from "../hooks/UseRecipies";

const Recipies = () => {
  const { data: catItems, isLoading } = UseRecipies();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="text-center py-5">
        <h2 className="text-3xl border-b-4 inline-block pb-2 border-orange-400">
          Categories
        </h2>
      </div>

      <div className=" grid grid-cols-3 gap-5 py-10">
        {catItems?.map((food) => (
          <FoodCard key={food.idMeal} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
