import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import Title from "../components/Title";
import { BsBookmarkHeart } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Recipie = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  if (navigation.state == "loading") {
    return <Loading></Loading>;
  }
  const recipeSingle = useLoaderData();

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
  } = recipeSingle;

  const handleAdd = () => {
    const kitchen = {
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
      email: user.email,
      recipieId: _id,
    };

    fetch("http://localhost:5000/add-to-kitchen", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(kitchen),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <Title>{strMeal}</Title>
      <section className="grid grid-cols-2  py-5 gap-5 ">
        <div
          style={{ backgroundColor: strTheme + "25" }}
          className="p-5 rounded-lg flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <h2 style={{ color: strTheme }} className="card-title">
              Dish Name : {strMeal}
            </h2>
            <BsBookmarkHeart
              title="Add to kitchen"
              onClick={handleAdd}
              className="text-3xl cursor-pointer"
            ></BsBookmarkHeart>
          </div>

          <p className=" text-lg">
            Indulge in the delightful flavors of {strMeal}, a beloved {strArea}{" "}
            dish. This {strCategory} recipe will surely tantalize your taste
            buds and transport you to a world of culinary delight.
          </p>

          <div className="card-actions ">
            <div
              style={{ backgroundColor: strTheme }}
              className="inline-flex m-2 rounded-full text-white py-3  px-5 badge-outline"
            >
              {strCategory} , {strTags?.split(",").join(" , ")}
            </div>

            <div
              style={{ backgroundColor: strTheme }}
              className="inline-flex m-2 rounded-full text-white py-3 px-5 badge-outline"
            >
              {strArea} Dish
            </div>
          </div>
          <p>See Bellow to Read All The Instructions</p>
        </div>
        <iframe
          className="w-full"
          height={315}
          src={`https://www.youtube.com/embed/${strYoutube?.split("=")[1]}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
      <div className="pt-20">
        <Title>Instructions</Title>
      </div>

      <div
        className="w-11/12 mx-auto p-10 m-5 rounded-xl text-justify "
        style={{ backgroundColor: strTheme + "25" }}
      >
        {strInstructions}
      </div>
    </div>
  );
};
export default Recipie;
