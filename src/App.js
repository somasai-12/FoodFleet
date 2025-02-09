import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

//Importing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        
      },
      {
        path: "/about",
        element: <About />,
        
      },
      {
        path: "/contact",
        element: <Contact />,
        
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
