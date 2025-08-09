import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbarWindow}>
      {/* container nav */}
      <div className={styles.navbarContainer}>
        {/* logo and app´s name */}
        <div className={styles.navbarLeft}>
            <a href="#" className={styles.navbarLogo}>
              Logo + name
            </a>
        </div>

        {/* links space */}
        <div className={styles.navbarRight}>
          <ul className={styles.navbarLinks}>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
