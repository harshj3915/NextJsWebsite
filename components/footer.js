import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`footer ${styles.footer}`}>
        <div className="container-fluid">
          <div className="row text-muted">
            <div className={styles.lnks}>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textMuted}
                    href="https://vinnovateit.com/"
                  >
                    <Image
                      src="/img/VinnovateIT_small.png"
                      alt=""
                      height={24}
                      width={36}
                      className={styles.footlinksViit}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textMuted}
                    href="https://www.instagram.com/vinnovateit/?hl=en"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textMuted}
                    href="https://twitter.com/v_innovate_it?lang=en"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textMuted}
                    href="https://github.com/vinnovateit"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.cpr}>
              <p className="mb-0">
                &copy; 2021 -
                <Link href={`/`} className={styles.textMuted}>
                  <a className={styles.textMuted}>
                    MADE With{" "}
                    <span className={styles.footerSpan}> &#10084;</span> By
                    VinnovateIT
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
