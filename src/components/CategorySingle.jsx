import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { Link, useNavigate } from "react-router-dom";

const CategorySingle = ({ data: category }) => {
  const navigate = useNavigate();
  console.log(Object.keys(category).join());
  const {
    id,
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  } = category || {};

  return (
    <div className="shadow-xl rounded-lg relative overflow-hidden transition duration-200 hover:-translate-y-2">
      <img
        className=" hover:-mt-2 transition-all z-10 hover:-z-10 w-full  duration-300 rounded-lg"
        src={strCategoryThumb}
        alt=""
      />
      <div className="w-full h-full bg-opacity-60 duration-75 absolute inset-0 opacity-0 hover:opacity-100 p-2 gap-5  bg-black flex  justify-center items-center flex-col">
        <p className="text-white text-center">{strCategory}</p>
        <button
          onClick={() => navigate(`/recipies/${strCategory}`)}
          className="text-white"
        >
          See Recipies
        </button>
      </div>
    </div>
  );
};

export default CategorySingle;
