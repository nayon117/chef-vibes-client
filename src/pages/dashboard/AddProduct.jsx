import axios from "axios";
import Title from "../../components/Title";
import useCategory from "../../hooks/useCategory";

const AddProduct = () => {
  const { data: categories } = useCategory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const recipie = {
      idMeal: form.idMeal?.value || "not-Given",
      strMeal: form.strMeal?.value || "not-Given",
      strDrinkAlternate: form.strDrinkAlternate?.value || "not-Given",
      strCategory: form.strCategory?.value || "not-Given",
      strArea: form.strArea?.value || "not-Given",
      strTheme: form.strTheme?.value || "not-Given",
      strInstructions: form.strInstructions?.value || "not-Given",
      strMealThumb: form.strMealThumb?.value || "not-Given",
      strTags: form.strTags?.value || "not-Given",
      strYoutube: form.strYoutube?.value || "not-Given",
    };
    // console.log(data);

    // fetch("http://localhost:5000/recipie", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(recipie),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios
      .post("http://localhost:5000/recipie", recipie)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <Title>Add a Product</Title>

      <div className="form">
        <form onSubmit={handleSubmit} className="card-body">
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
                required
              />

              <input
                type="url"
                placeholder="Enter a Product Image"
                className="input flex-1 input-bordered"
                required
                name="strMealThumb"
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
              />
              <input
                type="text"
                placeholder="Enter some Tags"
                className="input flex-1 input-bordered"
                required
                name="strTags"
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
export default AddProduct;
