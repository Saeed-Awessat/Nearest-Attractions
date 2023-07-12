import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListOfAttractions from "../components/ListOfAttractions";
import Coordinates from "../components/Coordinates";
import PageNotFound from "../components/PageNotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Coordinates />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/attractions",
      element: <ListOfAttractions />,
    },
  ],
  {
    basename: "/",
  }
);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
