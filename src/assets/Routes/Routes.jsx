import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import InstructorPage from "../../Pages/InstructorPage/INstructorPage";
import ClassesPage from "../../Pages/ClassesPage/ClassesPage";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element : <InstructorPage></InstructorPage>
      },
      {
        path: "/classes",
        element : <ClassesPage></ClassesPage>
      },
    ],
  },
  {
    path: "/login",
    element : <Login></Login>
  },
  {
    path: "/signup",
    element : <SignUp></SignUp>
  },
  {
    path: "/dashboard",
    element : <Dashboard></Dashboard>,
    children:[
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      }
    ]
  },
  
]);
