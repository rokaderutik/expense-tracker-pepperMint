import styles from "./Card.module.css";

/**
 * Card component
 * @param {string} cardTitle
 * title of card
 * @param {string} buttonTitle
 * title of button 
 * @param {number} amount
 * balance or expense amount
 * @param {function} updateAmount
 * function for updating respective amounts
 * @returns 
 */
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