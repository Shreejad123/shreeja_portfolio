import shreeja from "./assets/shreeja.png";
import styles from "./image.module.css";
function Image() {
  return (
    <>
      <img
        className={styles.image}
        src={shreeja}
        alt="This is a car image"
      ></img>
    </>
  );
}
export default Image;
