import styles from "./contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactSection}>
          <h2>Contact Me</h2>

          <p>Let's get in touch.</p>
          <div className={styles.contact}>
            <div>
              <label>Your Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Your Message</label>
              <input type="textbox" />
            </div>
            <div>
              <button className={`btn btn-info ${styles.customBtn}`}>
                Send message
              </button>
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <h2 className={styles.connect}>
            <b>Let's connect</b>
          </h2>
          <div className={styles.box}>
            <p>
              <b>Call me</b>
            </p>
            <p>9483350641</p>
          </div>
          <div className={styles.box}>
            <p>
              <b>Email me:</b>
            </p>
            <p>shreejadkotian00@gmail.com</p>
          </div>
          <div className={styles.box}>
            <p>
              <b>Github</b> :{" "}
            </p>
            <p>https://github.com/Shreejad123</p>
          </div>
          <div>
            <p>
              <span className={styles.icons}>
                <FaLinkedin></FaLinkedin>
              </span>
              <span className={styles.icons}>
                <FaGithub />
              </span>
              <span className={styles.icons}>
                <FaFacebookSquare />
              </span>
              <span className={styles.icons}>
                <BsTwitterX />
              </span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Contact;
