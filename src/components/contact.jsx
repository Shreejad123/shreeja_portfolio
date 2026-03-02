import styles from "./contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  return (
    <>
      <div className={styles.contactSection}>
        <h2>Contact Me</h2>

        <p>Feel free to reach out for collaborations or job opportunities.</p>

        <div>
          <p>Email: shreejadkotian00@gmail.com</p>
          <p>Phone: 9483350641</p>
          <p>
            GitHub:
            <a
              href="https://github.com/Shreejad123"
              className="text-blue-500 ml-2"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Shreejad123
            </a>
          </p>
          <button className={`btn btn-info ${styles.customBtn}`}>
            Visit My Linkedin
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
