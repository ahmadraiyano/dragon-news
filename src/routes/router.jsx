import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch("/news.json"),
                HydrateFallback: ()=><span className="loading loading-spinner loading-xl"></span>
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>Authentic</h1>
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/*',
        element: <h1>Error</h1>
    }
])

export default router