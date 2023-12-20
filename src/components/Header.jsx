import React from "react";
import Logo from "../assets/home.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex p-2 border-b border-gray-400 h-32">
      {/* Logo area */}
      <div className="p-2">
        <Link to={"/"} className="flex items-center">
          <img src={Logo} alt="sneakyLogo" className="w-24 h-24" />
          <p>sneaky</p>
        </Link>
      </div>
      {/* Header area */}
      <div className="flex grow justify-center items-center">
        <ul className="flex gap-20 h-full items-center">
          <Link to={"/kadin"} className="h-full flex items-center">
            <li>Kadın</li>
          </Link>
          <Link to={"/erkek"} className="h-full flex items-center">
            <li>Erkek</li>
          </Link>
          <Link to={"/cocuk"} className="h-full flex items-center">
            <li>Çocuk</li>
          </Link>
        </ul>
      </div>
      {/* User area --dark mode cart curt */}
      <div className="flex">
        <div className="flex gap-4">
          <button>Ara</button>
          <button>Dark Mod</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
