import { createBrowserRouter } from "react-router-dom";

export const mainRoute = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
