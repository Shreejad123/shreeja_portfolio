import { IoMdHome } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import Projects from "./components/project";
import ThemeToggleButton from "./components/themeTogglebutton";
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <p className={styles.iconsContainer}>
        <span className={styles.icons} onClick={() => navigate("/")}>
          <IoMdHome />
          &nbsp; Home
        </span>

        <span className={styles.icons} onClick={() => navigate("/projects")}>
          <AiOutlineFundProjectionScreen />
          &nbsp; Projects
        </span>
        <span className={styles.icons} onClick={() => navigate("/skills")}>
          <GiSkills />
          &nbsp; Skills
        </span>
        <span className={styles.icons} onClick={() => navigate("/about")}>
          <IoPerson />
          &nbsp; About me
        </span>
        <button
          className={`btn btn-info ${styles.customBtn}`}
          onClick={() => navigate("/contact")}
        >
          &nbsp; Contact me
        </button>
        <span className={styles.icons}>
          <ThemeToggleButton className={styles.icons} />
        </span>
      </p>
    </>
  );
}

export default NavBar;
