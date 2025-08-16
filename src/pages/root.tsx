import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

function root() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>  );
}

export default root;