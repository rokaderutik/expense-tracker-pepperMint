import List from "../List/List";
import styles from "./IncomeExpenseList.module.css";    

const IncomeExpenseList = ({ 
    incomeList, 
    expenseList,
    setIncomeList,
    setExpenseList
}) => {

    return (
        <div className={styles.transaction_wrapper}>
            <List 
                list={incomeList}
                listTitle="Income"
                setList={setIncomeList}
            />
            <List 
                list={expenseList}
                listTitle="Expense"
                setList={setExpenseList}
            />
        </div>
    );
};

export default IncomeExpenseList;