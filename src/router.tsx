import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Todos from "./components/Todos/todo";
import UsersMain from "./components/usersList/usersMain";
import Counter from "./components/counter/counter";
import UserDetail from "./components/usersList/userDetail";
import Error from "./pages/Error";
import ReactTut from "./pages/ReactTut";
import Tutorials from "./components/Tutorials";
import AuthGuard from "./guards/AuthGuard";
import Login from "./pages/Login";
import ControlledExample from "./components/controlled-form";
import SignupForm from "./pages/signup";
import App from "./components/main";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [{
      path:'/',
      Component:App

    }
    ],
  },
  {
    path: "/tutorial",
    Component: Tutorials,
    children: [
      {
        path: "react",
        element: (
          <AuthGuard>
            <ReactTut />
          </AuthGuard>
        ),
      },
    ],
  },
  { path: "/about", Component: About },
  { path: "user-list", Component: UsersMain },
  {path:'signup',Component:SignupForm},
  { path: "todos", Component: Todos },
  { path: "counter", Component: Counter },
  // dynamic route
  { path: "user-detail/:id", Component: UserDetail },
  { path: "login", Component: Login },
  { path: "form", Component: ControlledExample },
  // wild card route
  { path: "*", Component: Error },
]);
