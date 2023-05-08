import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        {/* Render Child Elements */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
