import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <main>
        {/* Render Child Elements */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
