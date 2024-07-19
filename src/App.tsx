import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Calculator from "./components/Calculator.tsx";
import Async from "./components/Async.tsx";
import GetUserData from "./calls/GetUserData.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/async",
    element: <Async />,
  },
  {
    path: "/userdata",
    element: <GetUserData />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
