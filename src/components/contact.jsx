import styles from "./contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <p>GET IN TOUCH</p>
          <h3>Let's Work Together.</h3>
          <p>
            I'm always open to dicussing new projects,creative ideas or
            opportunities to be part of your visions
          </p>
          <p>
            <b>
              <FaSquarePhone className={styles.icon} />
              &nbsp;&nbsp;Call me :&nbsp;{" "}
              <a href="tel:9483350641" className={styles.links}>
                +91 9483350641
              </a>
            </b>
          </p>
          <b>
            <p>
              <MdEmail className={styles.icon} />
              &nbsp;Email me: &nbsp;
              <a
                href="mailto:shreejadkotian00@gmail.com"
                target="_blank"
                className={styles.links}
              >
                shreejadkotian00@gmail.com
              </a>
            </p>
          </b>
          <b>
            <p>
              <FaGithub className={styles.icon} /> &nbsp; Github: &nbsp;
              <a
                href="https://github.com/Shreejad123"
                target="_blank"
                className={styles.links}
              >
                https://github.com/Shreejad123
              </a>
            </p>
          </b>
        </div>
        <div className={styles.contactCard}>
          <h5>Send me a message</h5>
          <div className={styles.contactInputs}>
            <div className={styles.Name}>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" />
            </div>
            <div>
              <input type="text" placeholder="Subject" />
            </div>
            <div></div>
            <div>
              <textarea placeholder="Your Message"></textarea>
            </div>
            <div></div>
            <div>
              <button
                type="button"
                className={`btn btn-primary ${styles.sendBtn}`}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
