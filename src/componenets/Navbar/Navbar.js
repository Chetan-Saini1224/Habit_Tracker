import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (<>
    <nav>
        <div>
            <Link className={styles.linkBtn} to="/">Habits</Link>
        </div>
        <div>
            <Link className={styles.linkBtn} to="/preiousdays">Previous Status</Link>
        </div>
    </nav>
    <Outlet />
  </>)
}

export default Navbar;