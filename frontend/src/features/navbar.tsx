import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronRight,
  DoorOpen,
  Facebook,
  Instagram,
  Menu,
  ScanHeart,
  Twitter,
  X,
} from "lucide-react";

function Navbar() {
  const user = true;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 ">
      <nav className="z-50 bg-slate-900 text-slate-100 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        {/* logo */}
        <Link
          to="/"
          className="text-lg text-yellow-300 font-bold flex items-center "
        >
          Health
          <span className="flex items-center text-red-600">
            Check <ScanHeart size={20} className="" />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-200">
          <NavLink
            to="/check-symptoms"
            className={({ isActive }) => isActive ? "text-red-600 font-semibold" : "hover:text-red-600 transition"}
          >
            Symptom Checker
          </NavLink>

          <NavLink
            to=""
            className={({ isActive }) => isActive ? "text-red-600 font-semibold" : "hover:text-red-600 transition"}
          >
            Features
          </NavLink>
        </div>

        {/* user active */}
        {user && (
          <div className="md:border border-red-600  bg-slate-900 rounded-full">
            <NavLink
              to="/app"
              className="hidden md:flex gap-1 items-center px-4 py-1.5 bg-red-600 m-0.5 transition-all rounded-full text-white font-semibold"
            >
              Get Started <ChevronRight size={22} />
            </NavLink>
          </div>
        )}

        {/* user not active */}
        {!user && (
          <div className="flex gap-2">
            <NavLink
              to="/auth/login"
              className="hidden md:block px-4 py-1.5 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
            >
              Login
            </NavLink>
          </div>
        )}

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition cursor-pointer"
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-1/2 h-full bg-slate-900 ml-auto flex flex-col justify-between p-5">
          {/* logo */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-yellow-300 font-bold flex items-center ">
              Health
              <span className="flex items-center text-red-600">
                Check <ScanHeart size={20} className="" />
              </span>
            </h1>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-0.5 bg-red-600 hover:bg-red-700 transition text-white rounded-md cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* menu */}
          <div className="flex flex-col gap-1">
            <NavLink
              to="/check-symptoms"
              className={({ isActive }) => isActive ? "text-red-600 font-semibold" : "hover:text-red-600 transition"}
            >
              Symptom Checker
            </NavLink>

            <NavLink
              to=""
              className={({ isActive }) => isActive ? "text-red-600 font-semibold" : "hover:text-red-600 text-white transition"}
            >
              Features
            </NavLink>

            {user && (
              <NavLink
                to=""
                className="text-white flex gap-2 items-center hover:text-red-600"
              >
                Get Started <ChevronRight size={20} />
              </NavLink>
            )}

            {!user && (
              <NavLink
                to="/auth/login"
                className="text-white flex gap-2 items-center hover:text-red-600"
              >
                Register / Login <DoorOpen />
              </NavLink>
            )}
          </div>

          {/* social */}
          <div className="flex gap-2">
            <Instagram size={20} className="text-red-600" />
            <Facebook size={20} className="text-red-600" />
            <Twitter size={20} className="text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
