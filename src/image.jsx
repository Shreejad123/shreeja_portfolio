import shreeja from "./assets/shreeja.png";
import styles from "./image.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Image() {
  return (
    <>
      <div>
        <img
          className={styles.image}
          src={shreeja}
          alt="This is a car image"
        ></img>
        <br></br>
      </div>
    </>
  );
}
export default Image;
