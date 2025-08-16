import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, type JSX } from "react";
import AuthGuard from "@/guards/AuthGuard";
import Error from "@/pages/Error"; 

// Lazy-loaded components
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/About"));
const Tutorials = lazy(() => import("@/components/Tutorials"));
const UsersMain = lazy(() => import("@/components/usersList/usersMain"));
const Counter = lazy(() => import("@/components/counter/counter"));
const UserDetail = lazy(() => import("@/components/usersList/userDetail"));
const ReactTut = lazy(() => import("@/pages/ReactTut"));
const Todos = lazy(() => import("@/components/Todos/todo"));
const Login = lazy(() => import("@/pages/Login"));
const SignupForm = lazy(() => import("@/pages/signup"));
const ControlledExample = lazy(() => import("@/components/controlled-form"));

const Loader = () => <div style={{ textAlign: "center" }}>Loading...</div>;

const withSuspense = (Component: JSX.Element) => (
  <Suspense fallback={<Loader />}>{Component}</Suspense>
);

function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withSuspense(<Home />)} />
        <Route path="/about" element={withSuspense(<About />)} />

        <Route path="/tutorial" element={withSuspense(<Tutorials />)}>
          <Route
            path="react"
            element={
              <AuthGuard>
                {withSuspense(<ReactTut />)}
              </AuthGuard>
            }
          />
        </Route>

        <Route path="/user-list" element={withSuspense(<UsersMain />)} />
        <Route path="/user-detail/:id" element={withSuspense(<UserDetail />)} />

        <Route path="/todos" element={withSuspense(<Todos />)} />
        <Route path="/counter" element={withSuspense(<Counter />)} />

        <Route path="/signup" element={withSuspense(<SignupForm />)} />
        <Route path="/login" element={withSuspense(<Login />)} />

        <Route path="/form" element={withSuspense(<ControlledExample />)} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App1;
