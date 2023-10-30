import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Slider from './pages/Home/Slider';
import FoodItems from './pages/Home/FoodItems/FoodItems';
import Review from './pages/Home/Review';
import RelatedShop from './pages/Home/RelatedShop';
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';
import FoodChallenge from './pages/Home/FoodChallenge';
import Supplier from './pages/Home/Supplier';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/offer',
        element: <Slider></Slider>
      },
      {
        path: '/foodItem',
        element: <FoodItems></FoodItems>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/challenge',
        element: <FoodChallenge></FoodChallenge>
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/supplier',
        element: <Supplier></Supplier>
      },
      {
        path: '/relatedShop',
        element: <RelatedShop></RelatedShop>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/challenge',
        element: <FoodChallenge></FoodChallenge>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
