import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SignUp, { action as SignUpAction } from "./routes/signup";
import RootLayout from "./routes/root";
import SignIn, { action as SignInAction } from "./routes/signIn";
import ErrorPage from "./routes/Error";
import Home from "./routes/home";
import Single from "./routes/single";
import { action as logoutAction } from "./routes/logout";
import Category from "./routes/category";
import Search from "./routes/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",

    children: [
      { index: true, element: <SignIn />, action: SignInAction },
      { path: "signup", element: <SignUp />, action: SignUpAction },
      { path: "home", element: <Home /> },
      { path: "single/:id", element: <Single /> },
      { path: "category/:id", element: <Category /> },
      { path: "search/:id", element: <Search /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
