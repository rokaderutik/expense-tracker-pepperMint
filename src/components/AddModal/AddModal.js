import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useSnackbar } from 'notistack';
import styles from "./AddModal.module.css";


const AddModal = ({ 
    isOpen, 
    setIsOpen,
    incomeList,
    expenseList,
    setIncomeList,
    setExpenseList
}) => {
    const [inputData, setInputData] = useState({
        description: "",
        amount: "",
        date: "",
        type: ""
    });

    const { enqueueSnackbar } = useSnackbar();

    const handleClose = () => setIsOpen(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };

    const addIncome = (e) => {
        e.preventDefault();

        if(Number(inputData.amount) <= 0) {
            enqueueSnackbar("Balance should be greater than 0", {
                variant: "warning"
            });
            setInputData({
                description: "",
                amount: "",
                date: "",
                type: ""
            });
            handleClose();
            return;
        }

        const lastItemId = incomeList.length > 0 ? incomeList[0].id : 0;
        setIncomeList(
            (prevList) => [{...inputData, id: lastItemId + 1}, ...prevList]
        );

        setInputData({
            description: "",
            amount: "",
            date: "",
            type: ""
        });
        handleClose();
    };

    const addExpense = (e) => {
        e.preventDefault();

        if(Number(inputData.amount) <= 0) {
            enqueueSnackbar("Expense should be greater than 0", {
                variant: "warning"
            });
            setInputData({
                description: "",
                amount: "",
                date: "",
                type: ""
            });
            handleClose();
            return;
        }

        const lastItemId = expenseList.length > 0 ? expenseList[0].id : 0;
        setExpenseList(
            (prevList) => [{...inputData, id: lastItemId + 1}, ...prevList]
        );

        setInputData({
            description: "",
            amount: "",
            date: "",
            type: ""
        });
        handleClose();
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.model_wrapper}>
                <h2 className={styles.title}>
                    Add Income/Expense
                </h2>
                <div className={styles.buttons_wrapper}>
                    <form 
                        className={styles.buttons_wrapper}
                        onSubmit={ inputData.type === "income" ? addIncome : addExpense }
                    >
                        <input 
                            className={styles.input}
                            type='number'
                            name='amount'
                            value={inputData.amount}
                            placeholder='Amount'
                            required
                            onChange={handleChange}
                        />
                        <input 
                            className={styles.input}
                            type='text'
                            name='description'
                            value={inputData.description}
                            placeholder='Title'
                            required
                            onChange={handleChange}
                        />
                        <input 
                            className={styles.input}
                            type='date'
                            name='date'
                            value={inputData.date}
                            placeholder='Date'
                            required
                            onChange={handleChange}
                        />
                        <select
                            name='type'
                            className={styles.select}
                            value={inputData.type}
                            required
                            onChange={handleChange}
                        >
                            <option value="none">Select Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <button
                            className={ `${styles.button} ${styles.expense_button}` }
                            type='submit'
                        >
                            Add
                        </button>
                        <button
                            className={ `${styles.button} ${styles.cancel_button}` }
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AddModal;