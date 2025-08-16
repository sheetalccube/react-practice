import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/About";
import Tutorials from "@/components/Tutorials";
import UsersMain from "@/components/usersList/usersMain";
import Counter from "@/components/counter/counter";
import UserDetail from "@/components/usersList/userDetail";
import Error from "@/pages/Error";
import ReactTut from "@/pages/ReactTut";
import AuthGuard from "@/guards/AuthGuard";
import Todos from "@/components/Todos/todo";
import Login from "@/pages/Login";
import SignupForm from "@/pages/signup";
import ControlledExample from "@/components/controlled-form";

function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/tutorial" element={<Tutorials />}>
          <Route
            path="react"
            element={
              <AuthGuard>
                <ReactTut />
              </AuthGuard>
            }
          />
        </Route>

        <Route path="/user-list" element={<UsersMain />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />

        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />

        <Route path="/form" element={<ControlledExample />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App1;
