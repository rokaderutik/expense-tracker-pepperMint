import Card from "./Card";
import styles from "./ExpenseFunctionality.module.css";

const ExpenseFunctionality = ({ income, expense }) => {

    return (
        <div className={styles.wrapper}>
            <Card 
                cardTitle="Balance"
                amount={income - expense}
            />
            <Card 
                cardTitle="Total Income"
                amount={income}
            />
            <Card 
                cardTitle="Total Expense"
                amount={expense}
            />
        </div>
    );
};

export default ExpenseFunctionality;