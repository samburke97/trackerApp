import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Pages/Root";
import Tracker from "./Pages/Tracker";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Tracker />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
