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
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <p className={styles.iconsContainer}>
        <span className={styles.icons} onClick={() => navigate("/")}>
          Home
        </span>
        <span className={styles.icons} onClick={() => navigate("/projects")}>
          Projects
        </span>
        <span className={styles.icons} onClick={() => navigate("/skills")}>
          Skills
        </span>
        <span className={styles.icons} onClick={() => navigate("/about")}>
          About me
        </span>
        <a href={ExampleDoc} download="Shreeja_D_Kotian_resume" target="_blank">
          <button className={`btn btn-info ${styles.resume}`}>
            <LuDownload /> &nbsp; Download resume
          </button>
        </a>
        <span className={styles.theme}>
          <ThemeToggleButton />
        </span>
      </p>
    </>
  );
}

export default NavBar;
