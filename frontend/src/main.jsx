import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import SignUpPage from "./pages/SignUp.jsx";
import SignInPage from "./pages/SignIn.jsx";
import PaymentPage from "./pages/Payment.jsx";
import BusinessPage from "./pages/Business.jsx";
import BusinessSubmitSuccessPage from "./pages/BusinessSubmitSuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/payment/:id",
    element: <PaymentPage />,
  },
  {
    path: "/business",
    element: <BusinessPage />,
  },
  {
    path: "/businessSubmitSuccess",
    element: <BusinessSubmitSuccessPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
