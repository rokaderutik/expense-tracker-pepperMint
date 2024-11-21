import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

const IncomeList = ({ list, listTitle, setList }) => {

    const handleDelete = (id) => {
        const updatedList = list.filter(item => item.id !== id)
        // console.log(updatedList)
        setList(updatedList);
    }; 

    return (
        <div className={styles.section_wrapper}>
            <h2 className={styles.heading}>{listTitle} Transactions</h2>
            {
                list.length > 0 ? (
                <div className={styles.list_wrapper}>
                {
                    list.map((transaction) => (
                        <ListItem 
                            key={transaction.id}
                            title={transaction.description}
                            amount={transaction.amount}
                            id={transaction.id}
                            handleDelete={handleDelete}
                        />
                    ))
                }
                </div>
                ) : (
                    <div className={styles.list_wrapper}
                    style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                    >
                        No transactions!
                    </div>
                )
            }
        </div>
    );
};

export default IncomeList;