import AddModal from '../AddModal/AddModal';
import styles from "./Navbar.module.css";

const Navbar = ({ 
    isOpen, 
    setIsOpen,
    incomeList,
    expenseList,
    setIncomeList,
    setExpenseList
}) => {

    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Expense Tracker</h1>
            <button
                className={styles.button} 
                onClick={() => setIsOpen(true)}  
            >
                Add Income/Expense
            </button>
            <AddModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                incomeList={incomeList}
                expenseList={expenseList}
                setIncomeList={setIncomeList}
                setExpenseList={setExpenseList}
            />
        </div>
    );
};

export default Navbar;