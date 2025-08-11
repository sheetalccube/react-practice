import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: JSX.Element;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const isLoggedIn = Boolean(localStorage.getItem("token")); 

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
