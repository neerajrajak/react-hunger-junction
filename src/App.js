import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/UserContext";
import appStore from "./store/appStore";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const Cart = lazy(() => import("./components/CartDetails"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Guest User");

  useEffect(() => {
    setTimeout(() => setUserName("Neeraj Rajak"), 3000);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const routes = [
  {
    path: "/",
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
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocerries",
        element: (
          <Suspense fallback={<Shimmer count={10} />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Shimmer count={2} />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
];

const appRouter = createBrowserRouter(routes, {
  basename: "/react-hunger-junction",
});

export default appRouter;
