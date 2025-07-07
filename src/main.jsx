import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./components/todo/TodoApp.jsx";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ProductPage from "./pages/products.jsx";
import UserPage from "./pages/users.jsx";

import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
