import { IoMdHome } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <p className={styles.iconsContainer}>
        <span className={styles.icons}>
          <IoMdHome />
          &nbsp; Home
        </span>

        <span className={styles.icons}>
          <AiOutlineFundProjectionScreen />
          &nbsp; Projects
        </span>
        <span className={styles.icons}>
          <GiSkills />
          &nbsp; Skills
        </span>
        <span className={styles.icons}>
          <IoPerson />
          &nbsp; About me
        </span>
        <button
          className={`btn btn-info ${styles.customBtn}`}
          onClick={() => navigate("/contact")}
        >
          &nbsp; Contact me
        </button>
      </p>
    </>
  );
}

export default NavBar;
