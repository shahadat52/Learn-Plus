import { createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import ErrorPage from "./ErrorPage";
import Home from "./Home/Home";
import Main from "./Main";
import Statistics from "./Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "statistics", element: <Statistics /> },
      { path: "about", element: <About /> },
    ],
  },
]);
