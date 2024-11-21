import { useState } from 'react';
import './App.css';
import ExpenseFunctionality from './components/ExpenseFunctionality/ExpenseFunctionality';
import Navbar from './components/Navbar/Navbar';
import IncomeExpenseList from './components/IncomeExpenseList/IncomeExpenseList';
import useLocalStorage from "./components/customHook";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [incomeList, setIncomeList] = useLocalStorage("income", []);
  const [expenseList, setExpenseList] = useLocalStorage("expense", []);

  const expense = expenseList.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const income = incomeList.reduce(
    (total, item) => total + Number(item.amount),
    0
  );
  

  return (
    <div>
      <Navbar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        incomeList={incomeList}
        expenseList={expenseList}
        setIncomeList={setIncomeList}
        setExpenseList={setExpenseList}
      />
      <ExpenseFunctionality 
        income={income}
        expense={expense}
      />
      <IncomeExpenseList 
        incomeList={incomeList}
        expenseList={expenseList}
        setIncomeList={setIncomeList}
        setExpenseList={setExpenseList}
      />
    </div>
  );
}

export default App;
