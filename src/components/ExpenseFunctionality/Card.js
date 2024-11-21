import styles from "./Card.module.css";

const Card = ({ cardTitle, amount }) => {   

    return (
        <div className={styles.card_body}>
            <p className={styles.title}>
                {`${cardTitle}: `}
                <span 
                    className={cardTitle === 'Total Expense' ? styles.expense_text : styles.income_text}
                >
                    ₹{amount}
                </span>
            </p>
        </div>
    );
};

export default Card;