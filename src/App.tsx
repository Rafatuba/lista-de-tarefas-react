import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ComoUsar from "./pages/como-usar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/comousar",
      element: <ComoUsar />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
