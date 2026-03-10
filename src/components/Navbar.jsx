import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout-btn.svg";

function Navbar() {
  return (
    <div className="px-5 pt-5 flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <Link
        to="/"
        className="flex items-center justify-center"
      >
        <img src={logout} alt="Logout" className="text-white" />
      </Link>
    </div>
  );
}

export default Navbar;
