import { IoMdHome } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import Projects from "./components/project";
import ThemeToggleButton from "./components/themeTogglebutton";
import ExampleDoc from "../src/assets/Shreeja D Kotian_resume.pdf";
import { LuDownload } from "react-icons/lu";
import { useState } from "react";
import CloseMenu from "./assets/close.svg";
import MenuIcon from "./assets/menu.svg";
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.iconsContainer}>
        <ul className={`${styles.navOptions} ${click ? styles.active : ""}`}>
          <li>
            <span
              className={styles.icons}
              onClick={() => {
                navigate("/");
                closeMobileMenu();
              }}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={styles.icons}
              onClick={() => {
                navigate("/projects");
                closeMobileMenu();
              }}
            >
              Projects
            </span>
          </li>
          <li>
            <span
              className={styles.icons}
              onClick={() => {
                navigate("/skills");
                closeMobileMenu();
              }}
            >
              Skills
            </span>
          </li>
          <li>
            <span
              className={styles.icons}
              onClick={() => {
                navigate("/about");
                closeMobileMenu();
              }}
            >
              About me
            </span>
          </li>

          <li>
            <a
              href={ExampleDoc}
              download="Shreeja_D_Kotian_resume"
              target="_blank"
            >
              <button className={`btn btn-info ${styles.resume}`}>
                <LuDownload /> &nbsp; Download resume
              </button>
            </a>
          </li>
          <li>
            <span className={styles.icons}>
              <ThemeToggleButton />
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.mobileMenu} onClick={handleClick}>
        <img
          src={click ? CloseMenu : MenuIcon}
          alt="menu"
          className={styles.menuIcon}
        />
      </div>
    </>
  );
}

export default NavBar;
