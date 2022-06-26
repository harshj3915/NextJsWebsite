import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <nav
        className={`navbar navbar-expand navbar-light navbar-bg ${styles.navbar}`}
      >
        <Link href="/" className={styles.sidebarToggle}>
          <a>
            <Image
              src="/img/sglogo.png"
              height={42}
              width={70}
              className={styles.logo}
              alt="StudyHub"
            />
          </a>
        </Link>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <div className="search-box">
              <form
                className={styles.searchForm}
                onSubmit={(e) =>
                  (window.location.href = `/search/${searchText}`)
                }
              >
                <div
                  className={`input-group autocomplete ${styles.searchNavbar}`}
                >
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search Course"
                    aria-label="Search"
                    name="query"
                    id="autoCourse"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <div className={styles.searchButton}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/search/${searchText}`;
                      }}
                    >
                      <i value="" className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
