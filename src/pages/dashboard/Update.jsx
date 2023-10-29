import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loading from "../Loading";
import Title from "../../components/Title";
import useCategory from "../../hooks/useCategory";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const { data: categories } = useCategory();
  //   console.log(data);
  const navigation = useNavigation();
  const goTo = useNavigate();
  //   console.log(navigation);
  if (navigation.loading == "loading") return <Loading></Loading>;
  const recipie = useLoaderData();
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
  } = recipie;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedRecipie = {
      strMeal: form.strMeal?.value || "not-Given",
      strCategory: form.strCategory?.value || "not-Given",
      strArea: form.strArea?.value || "not-Given",
      strTheme: form.strTheme?.value || "not-Given",
      strInstructions: form.strInstructions?.value || "not-Given",
      strMealThumb: form.strMealThumb?.value || "not-Given",
      strTags: form.strTags?.value || "not-Given",
    };
    // console.log(updatedRecipie);
    const response = await axios.put(
      `http://localhost:5000/recipie/${_id}`,
      updatedRecipie
    );
    const data = await response.data;
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire("Data Updated", "You clicked the button!", "success");
    }
    goTo("/dashboard/manage-product");
  };

  return (
    <div>
      <Title>Update Product</Title>

      <div className="form">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Enter a Product Name"
                className="input flex-1 input-bordered"
                name="strMeal"
                defaultValue={strMeal}
                required
              />

              <input
                type="url"
                placeholder="Enter a Product Image"
                className="input flex-1 input-bordered"
                required
                name="strMealThumb"
                defaultValue={strMealThumb}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Area</span>
            </label>
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Enter Area"
                className="input flex-1 input-bordered"
                required
                name="strArea"
                defaultValue={strArea}
              />

              <select
                className="input flex-1 input-bordered"
                name="strCategory"
                id=""
              >
                {categories?.map((cat) => (
                  <option defaultValue={cat.strCategory}>
                    {cat.strCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Color</span>
            </label>
            <div className="flex gap-2 flex-wrap">
              <input
                type="color"
                placeholder="Enter a Product Name"
                className="input flex-1 input-bordered"
                required
                name="strTheme"
                defaultValue={strTheme}
              />
              <input
                type="text"
                placeholder="Enter some Tags"
                className="input flex-1 input-bordered"
                required
                name="strTags"
                defaultValue={strTags}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instruction</span>
            </label>
            <textarea
              className="textarea textarea-ghost"
              placeholder="Insert some information"
              name="strInstructions"
              defaultValue={strInstructions}
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add a Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Update;
