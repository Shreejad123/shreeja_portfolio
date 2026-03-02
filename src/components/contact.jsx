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
          <div className={styles.box}>
            <p>
              <b>Call me</b> +919483350641
            </p>
          </div>
          <div className={styles.box}>
            <p>
              <b>Email me:</b> shreejadkotian00@gmail.com
            </p>
          </div>
          <div className={styles.box}>
            <p>
              <b>Github</b> :https://github.com/Shreejad123
            </p>
          </div>
          <div>
            <p>
              <FaLinkedin></FaLinkedin>
              <FaGithub />
              <FaFacebookSquare />
              <BsTwitterX />
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Contact;
