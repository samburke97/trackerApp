import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>TRACKM8</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <NavLink to="tracker">Tracker</NavLink>
        </ul>
        <ul>
          <NavLink to="">Home</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
