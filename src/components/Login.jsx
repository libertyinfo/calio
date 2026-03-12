import { Link } from "react-router-dom";
import loginimg from "../assets/login-img.png";
import logo from "../assets/logo.svg";
import pattern from "../assets/login-bgpattern.svg";

function Login() {
  return (
    <section className="bg-[#1E2230] h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full">
        <div className="w-1/2 h-full p-[50px]">
          <img
            src={loginimg}
            alt="Login Visual"
            className="w-full h-full rounded-[40px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-1/2 h-full bg-[#1E2230] flex flex-col px-16 py-10 relative">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" />
          </div>

          {/* CENTER CONTENT */}
          <div className="flex flex-col flex-1 justify-center items-center text-center">
            <h2 className="xl:text-[46px] lg:text-[40px] md:text-[32px] font-semibold text-white">
              Track Smarter. Eat Better.
              <br />
              Live Healthier.
            </h2>

            <p className="xl:text-[22px] lg:text-[18px] md:text-[14px] text-white mt-[30px] mb-[50px]">
              CALIO.ai helps you track calories, nutrition, and daily goals{" "}
              <br />
              using smart AI insights — all in one place.
            </p>

              <Link
                to="/home"
                className="bg-white text-black xl:px-[68px] xl:py-[18px] md:px-[65px] md:py-[15px] font-medium rounded-[20px] flex items-center gap-3 hover:scale-105 transition duration-300 relative z-10"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-6 h-6"
                />
                Continue with Google
              </Link>

            <div className="absolute bottom-0">
              <img src={pattern} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;