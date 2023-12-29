import React from "react";
import Logo from "../assets/sneaky.png";
import { Link } from "react-router-dom";
import { MdSearch, MdOutlineDarkMode } from "react-icons/md";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { toggleSearchField } from "../features/search";

function Header() {
  const searchFieldOn = useSelector((state) => state.search.searchFieldOn);
  const dispatch = useDispatch();

  return (
    <header className="flex sticky z-0 px-2 border-b border-gray-400 h-20">
      {/* Logo area */}
      <div className="p-2">
        <Link to={"/"} className="flex items-center">
          <img src={Logo} alt="sneakyLogo" className="w-32 h-16" />
        </Link>
      </div>
      {/* Header area */}
      <div className="flex grow justify-center items-center">
        <ul className="flex justify-center w-80 h-full items-center">
          <Link to={"/kadin"} className="h-full w-1/3 flex items-center group">
            <li className="border-b-2 p-1 border-transparent group-hover:border-black">
              Kadın
            </li>
          </Link>
          <Link to={"/erkek"} className="h-full w-1/3 flex items-center group">
            <li className="border-b-2 p-1 border-transparent group-hover:border-black">
              Erkek
            </li>
          </Link>
          <Link to={"/cocuk"} className="h-full w-1/3 flex items-center group">
            <li className="border-b-2 p-1 border-transparent group-hover:border-black">
              Çocuk
            </li>
          </Link>
        </ul>
      </div>
      {/* User area --dark mode cart curt */}
      <div className="flex">
        <div className="flex gap-4">
          <div className="flex items-center">
            <button
              className="flex items-center"
              onClick={() => dispatch(toggleSearchField())}
            >
              <MdSearch size={25} />
              {searchFieldOn ? <div>arama acik</div> : ""}
            </button>
          </div>
          <button>
            <MdOutlineDarkMode size={25} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
