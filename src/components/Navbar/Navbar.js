import styles from "./Navbar.module.css";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Expense Tracker</h1>
        </div>
    );
};

export default Navbar;