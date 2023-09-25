import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";
import Errorpage from "../Errorpage";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: "/favourites",
                element: <Favourites></Favourites>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('/phones.json')

            }
        ]
    }
]);


export default myCreatedRoute;