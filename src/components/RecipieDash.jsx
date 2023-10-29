import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RecipieDash = ({ recipie, refetch }) => {
  //   console.log(Object.keys(recipie).join(","));
  const goTo = useNavigate();

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
  } = recipie || {};

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/recipie/${_id}`).then((res) => {
      if (res?.data?.deletedCount > 0) {
        Swal.fire(`${strMeal}`, "Has been Delete", "success");
        refetch();
      }
    });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} className="max-h-[200px]" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <p>{strCategory}</p>
      </div>
      <div className="card-actions flex flex-col items-center justify-center">
        <button onClick={handleDelete} className="btn btn-primary">
          Delete This Recipie
        </button>
        <button
          onClick={() => goTo(`/dashboard/update-product/${_id}`)}
          className="btn btn-primary"
        >
          {" "}
          Update This Recipie
        </button>
      </div>
    </div>
  );
};

export default RecipieDash;
