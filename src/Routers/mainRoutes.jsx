import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Recipies from "../pages/Recipies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Category from "../pages/Category";
import Recipie from "../pages/Recipie";
import PrivateRoute from "./PrivateRoute";
import Kitchen from "../pages/Kitchen";

import Dashboard from "../layouts/Dashboard";
import Title from "../components/Title";
import AddProduct from "../pages/dashboard/AddProduct";
import ManageProduct from "../pages/dashboard/ManageProduct";
import Update from "../pages/dashboard/Update";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/recipies",
        element: (
          <PrivateRoute>
            <Recipies></Recipies>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipies/:category",
        element: <Category></Category>,

        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipies/${params.category}`),
      },
      {
        path: "recipie/:id",
        element: (
          <PrivateRoute>
            <Recipie></Recipie>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipie/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "kitchen",
        element: (
          <PrivateRoute>
            <Kitchen></Kitchen>
          </PrivateRoute>
        ),
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {},
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Title>Dashboard</Title>,
      },
      {
        path: "/dashboard/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-product",
        element: (
          <PrivateRoute>
            <ManageProduct></ManageProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/update-product/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipie/${params.id}`),
      },
    ],
  },
]);

export default mainRoutes;
