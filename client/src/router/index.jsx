import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Menu from "../pages/Menu";
import Pay from "../pages/Pay";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import AddFood from "../pages/AddFood";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import ProductInfo from "../components/ProductInfo";
import { deleteProduct, menuLoader, productLoader, updateProduct } from "../utils/menuUtils";
import EditProduct from "../components/EditProduct";
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
            children: [],
          },
          {
            element: <Menu />,
            path: "menu",
            loader: menuLoader,
            children: [
              {
                element: <ProductInfo />,
                path: `products/:productId`,
                action: deleteProduct,
                loader: productLoader,
              },
            ],
          },
          {
            element: <Pay />,
            path: "pay",
          },
          {
            element: <AddFood />,
            path: "/add-food",
          },
          {
            element: <About />,
            path: "/about",
          },
          {
            element: <EditProduct />,
            path: "/edit/:productId",
            action: updateProduct,
            loader: productLoader,
          },
        ],
      },
      {
        element: <Admin />,
        path: "/admin",
      },
    ],
  },
]);
