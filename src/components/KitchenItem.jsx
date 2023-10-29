import React from "react";
import { useNavigate } from "react-router-dom";

const KitchenItem = ({ recipie, handleDelete }) => {
  const navigate = useNavigate();
  const {
    _id,
    idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strTheme,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
    email,
    recipieId,
  } = recipie;

  return (
    <div className="flex w-11/12 mx-auto justify-between border rounded-lg gap-10 ">
      <div className="image">
        <img src={strMealThumb} className="max-w-[300px]" alt="" />
      </div>
      <div className="info flex-1 py-2 space-x-2 space-y-3">
        <h2 className="text-xl">{strMeal}</h2>
        <p className="bg-orange-500 text-white inline-flex p-1 px-2 rounded-full">
          {strCategory}
        </p>
        <p className="bg-orange-500 text-white inline-flex p-1 px-2 rounded-full">
          {strArea}
        </p>
        <p className="bg-orange-500 text-white inline-flex p-1 px-2 rounded-full">
          {strTags}
        </p>

        <p className="text-justify">{strInstructions.slice(0, 300)}...</p>
        <button onClick={() => navigate(`/recipie/${recipieId}`)}>
          See Full Recipie
        </button>

        <button onClick={() => handleDelete(_id)}>Delete From Kitchen</button>
      </div>
    </div>
  );
};

export default KitchenItem;
