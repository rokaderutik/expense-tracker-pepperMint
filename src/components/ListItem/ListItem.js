import styles from "./ListItem.module.css";

const ListItem = ({ title, amount, id, handleDelete }) => {

    return (
        <div>
            <div className={styles.item_wrapper}>
                <p>{title}</p>
                <p>{amount}</p>
                <button 
                    className={styles.button}
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </button>
            </div>
            <hr className={styles.hr} />
        </div>
    );
};

export default ListItem;