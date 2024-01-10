import React, { useEffect } from "react";
import Logo from "../assets/sneaky.png";
import Logo2 from "../assets/sneaky2.png";
import { Link } from "react-router-dom";
import { MdSearch, MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { openSearchField, closeSearchField } from "../features/search";
import { toggleDarkMode } from "../features/dark";
import { handleScroll } from "../features/scroll";

function Header() {
  const searchFieldOn = useSelector((state) => state.search.searchFieldOn);
  const darkModeOn = useSelector((state) => state.darkMode.darkModeOn);
  const headerVisible = useSelector((state) => state.scroll.headerVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScrolll = () => {
      dispatch(handleScroll());
    };
    window.addEventListener("scroll", handleScrolll);

    return () => window.removeEventListener("scroll", handleScrolll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`${
        headerVisible ? "top-0 " : "-top-20"
      } flex sticky h-20 z-10 px-2 border-b border-gray-400 dark:border-black bg-white dark:bg-bg1 dark:text-white transition-all duration-300`}
    >
      {/* Logo area */}
      <div className="p-2">
        <Link to={"/"} className="flex items-center">
          {darkModeOn ? (
            <img src={Logo2} alt="sneakyLogo" className="w-32 h-16" />
          ) : (
            <img src={Logo} alt="sneakyLogo" className="w-32 h-16" />
          )}
        </Link>
      </div>
      {/* Header area */}
      <div className="flex grow justify-center items-center">
        <ul className="flex justify-center w-80 h-full items-center">
          <Link to={"/kadin"} className="h-full w-1/3 flex items-center group">
            <li className="border-b-2 p-1 border-transparent group-hover:border-primary">
              Kadın
            </li>
          </Link>
          <Link to={"/erkek"} className="h-full w-1/3 flex items-center group">
            <li className="border-b-2 p-1 border-transparent group-hover:border-primary">
              Erkek
            </li>
          </Link>
          <Link to={"/cocuk"} className="h-full w-1/3 flex items-center group">
            <li className="border-b-2 p-1 border-transparent group-hover:border-primary">
              Çocuk
            </li>
          </Link>
        </ul>
      </div>
      {/* User area --dark mode cart curt */}
      <div className="flex gap-4">
        <div className="flex items-center">
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => dispatch(openSearchField())}
            onBlur={() => dispatch(closeSearchField())}
          >
            <MdSearch size={25} />
            <form
              className={`${
                searchFieldOn ? "w-32 transition-all" : "w-0 transition-all"
              }`}
            >
              <input
                autoFocus
                type="text"
                placeholder="Arama"
                className={`bg-gray-100 dark:bg-gray-200 dark:text-black h-full w-full rounded ${
                  searchFieldOn ? "p-1" : ""
                }`}
              />
            </form>
          </div>
        </div>
        <div className="flex items-center">
          {darkModeOn ? (
            <MdDarkMode
              size={25}
              onClick={() => {
                dispatch(toggleDarkMode());
              }}
              className="hover:cursor-pointer"
            />
          ) : (
            <MdOutlineDarkMode
              size={25}
              onClick={() => {
                dispatch(toggleDarkMode());
              }}
              className="hover:cursor-pointer"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
