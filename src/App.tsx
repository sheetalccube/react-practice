import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthGuard from "@/guards/AuthGuard";
import Error from "@/pages/Error";
import root from "./pages/root";

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/About"));
const Todos = lazy(() => import("@/components/Todos/todo"));
const UsersMain = lazy(() => import("@/components/usersList/usersMain"));
const Counter = lazy(() => import("@/components/counter/counter"));
const UserDetail = lazy(() => import("@/components/usersList/userDetail"));
const ReactTut = lazy(() => import("@/pages/ReactTut"));
const Tutorials = lazy(() => import("@/components/Tutorials"));
const Login = lazy(() => import("@/pages/Login"));
const ControlledExample = lazy(() => import("@/components/controlled-form"));
const SignupForm = lazy(() => import("@/pages/signup"));
import { Suspense, type JSX } from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);
const withSuspense = (Component: JSX.Element) => (
  <Suspense fallback={<Loader />}>{Component}</Suspense>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: root,
      // errorElement: <Error />,
      children: [
        { path: "/", element: withSuspense(<Home />) },
        {
          path: "/tutorial",
          element: withSuspense(<Tutorials />),
          children: [
            {
              path: "react",
              element: (
                <AuthGuard>{withSuspense(<ReactTut />)}</AuthGuard>
              ),
            },
          ],
        },
        { path: "/about", element: withSuspense(<About />) },
        { path: "user-list", element: withSuspense(<UsersMain />) },
        { path: "signup", element: withSuspense(<SignupForm />) },
        { path: "todos", element: withSuspense(<Todos />) },
        { path: "counter", element: withSuspense(<Counter />) },
        { path: "user-detail/:id", element: withSuspense(<UserDetail />) },
        { path: "login", element: withSuspense(<Login />) },
        { path: "form", element: withSuspense(<ControlledExample />) },
        { path: "*", element: <Error /> }, 
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
