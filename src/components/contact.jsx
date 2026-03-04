import styles from "./contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactSection}>
          <h2 className={styles.contactHeader}>
            <b>Contact Me</b>
          </h2>

          <p>
            <b>Let's get in touch.</b>
          </p>
          <div className={styles.contact}>
            <div>
              <label>Your Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" />
            </div>
            <div className={styles.formfield}>
              <label for="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="30"
              ></textarea>
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
              <b>
                <FaPhoneAlt />
                &nbsp; Call me
              </b>
            </p>
            <p>9483350641</p>
          </div>
          <div className={styles.box}>
            <p>
              <b>
                <MdOutlineEmail />
                &nbsp; Email me:
              </b>
            </p>
            <p>shreejadkotian00@gmail.com</p>
          </div>
          <div className={styles.box}>
            <p>
              <b>
                {" "}
                <FaGithub />
                &nbsp; Github
              </b>{" "}
              :{" "}
            </p>
            <p>https://github.com/Shreejad123</p>
          </div>
          <div>
            <p>
              <span className={styles.icons}>
                <Link
                  to="https://www.linkedin.com/in/shreeja-d-kotian-b4639a286/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={styles.iconsContainer} />
                </Link>
              </span>
              <span className={styles.icons}>
                <Link
                  to="https://www.linkedin.com/in/shreeja-d-kotian-b4639a286/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className={styles.iconsContainer} />
                </Link>
              </span>
              <span className={styles.icons}>
                <Link
                  to="https://www.linkedin.com/in/shreeja-d-kotian-b4639a286/"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className={styles.iconsContainer} />
                </Link>
              </span>
              <span className={styles.icons}>
                <Link
                  to="https://github.com/Shreejad123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={styles.iconsContainer} />
                </Link>
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
