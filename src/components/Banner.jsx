import { useEffect, useState } from "react";
import animation from "../assets/cooking.json";

import Lottie from "lottie-react";
import Loading from "../pages/Loading";
const Banner = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCat(data.meals));
  }, []);

  if (!cat.length) {
    return <Loading></Loading>;
  }

  return (
    <section
      className="bg-contain bg-fixed"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <div
        id="banner"
        className="flex min-h-screen bg-white bg-opacity-95 flex-col-reverse md:flex-row items-center justify-around "
      >
        <div className="text space-y-4  text-center md:text-start ">
          <h1 className="text-5xl font-bold">
            With <span className="text-orange-400"> 30,000+</span> Recipies,
          </h1>
          <div className=" max-w-[520px] md:rounded-full p-2 bg-orange-400 text-white">
            <marquee direction="right">
              {cat?.map((item) => item.strCategory).join(" , ")}
            </marquee>
          </div>

          <h2 className="text-3xl">Be a Best Chef Of Your Family</h2>
          <div className="buttons flex gap-3 justify-center md:justify-start">
            <button className=" ">Join Now</button>
            <button className=" ">See Recipies</button>
          </div>
        </div>
        <div className="max-w-[400px] ">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
