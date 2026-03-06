import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout-img.svg";

function Navbar() {
  return (
    <div className="px-5 pt-5 flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <Link
        to="/login"
        className="bg-white rounded-full flex items-center justify-center p-3"
      >
        <img src={logout} alt="Logout" />
      </Link>
    </div>
  );
}

export default Navbar;
