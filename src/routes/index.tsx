import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./about";
import { Home } from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

export const RouteProvider = () => <RouterProvider router={router} />;
