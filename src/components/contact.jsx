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
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <p>GET IN TOUCH</p>
          <h3>Let's Work Together.</h3>
          <p>
            I'm always open to dicussing new projects,creative ideas <br></br>
            or opportunities to be part of your visions
          </p>
          <p>
            <b>
              <FaPhoneAlt />
              &nbsp;Call me &nbsp;<span>+91 9483350641</span>
            </b>
          </p>
          <b>
            <p>
              <MdOutlineEmail />
              &nbsp;Email me &nbsp;
              <a href="mailto:shreejadkotian00@gmail.com">
                shreejadkotian00@gmail.com
              </a>
            </p>
          </b>
          <b>
            <p>
              <FaGithub /> &nbsp; Github &nbsp;https://github.com/Shreejad123
            </p>
          </b>
        </div>
        <div className="contact-card">
          <h2>Send me a message</h2>
          <p>I'll get back to you as soon as possible.</p>

          <div className="row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea rows="6" placeholder="Your Message"></textarea>

          <button className="send-btn">✈ Send Message</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
