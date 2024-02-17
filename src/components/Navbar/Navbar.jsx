import "./Navbar.css";
import React, { useContext, useState } from "react";
import { FaCog, FaBug, FaSun, FaMoon } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import ModalShow from "../ModalShow/ModalShow";
import Dropdown from "../Dropdown/Dropdown";
import { AuthContext } from "../../context/authContext";
import HeaderShowError from "../HeaderShowError/HeaderShowError";
import { ThemeContext, useTheme } from "../../context/themeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const allErrors = listOfErrors.length;
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { token, logout } = useContext(AuthContext);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  console.log(isChecked);

  return (
    <div className="w-full flex xl:justify-end rounded-xl md:mr-5 md:ml-10 p-10 bg-slate-100 dark:bg-[#374151]">
      <div className="flex justify-between xl:justify-around xl:w-2/5 items-center">
        <div className="">
          <label htmlFor="dark-toggle" class="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                name="dark-mode"
                id="dark-toggle"
                className="checkbox hidden"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />

              <div className="flex justify-center items-center  border-2 border-[#444a63]  dark:border-white w-[66px] h-11 rounded-full"></div>
              <div className="dot absolute left-7 top-0 p-1 w-9 h-8 rounded-full text-4xl text-[#444a63] dark:text-white -translate-x-1/3 transition-transform ease-in-out delay-200">
                {isChecked ? (
                  <FaMoon className="dark:hover:text-[#60A5FA] hover:text-[#60A5FA]:transition-all:ease-in-out delay-150 " />
                ) : (
                  <FaSun className="dark:hover:text-[#60A5FA] hover:text-[#60A5FA] transition-all ease-in-out delay-150" />
                )}
              </div>
            </div>
          </label>

          {/* <Dropdown
            open={open}
            trigger={
              <div onClick={() => setOpen(!open)}>
                <FaCog className="navbar-item-icon hover:text-[#60A5FA] transition-all ease-in-out delay-150" />
              </div>
            }
            menu={[
              <div onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </div>
              // <button onClick={handleMenuTwo}>
              //   <FaSun />
              // </button>,
            ]}
          /> */}
        </div>

        <div
          className="relative text-[26px] font-extrabold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBug className="navbar-item-icon hover:text-[#60A5FA] transition-all ease-in-out delay-150 dark:text-white dark:hover:text-[#60A5FA]" />

          {/* <span className="navbar-item-badge" >{allErrors}</span> */}
          {isOpen && (
            <ModalShow open={isOpen} onClose={() => setIsOpen(false)}>
              <HeaderShowError />
            </ModalShow>
          )}
        </div>

        <div>
          {token ? (
            <span
              className="exit text-3xl font-extrabold"
              onClick={() => logout()}
            >
              <FiLogOut className="navbar-item-icon dark:hover:text-[#60A5FA] hover:text-[#60A5FA] transition-all ease-in-out delay-150 dark:text-white" />
            </span>
          ) : (
            <Link to="/login">
              <span className="login">
                <FiLogIn className="navbar-item-icon dark:hover:text-[#60A5FA] hover:text-[#60A5FA] transition-all ease-in-out delay-150" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
