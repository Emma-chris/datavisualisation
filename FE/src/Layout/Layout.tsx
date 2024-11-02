import { Outlet } from "react-router-dom";
import StaticCompononet from "../Static/StaticCompononet";

const Layout = () => {
  return (
    <div>
      <Outlet />

      <StaticCompononet />
    </div>
  );
};
export default Layout;
