import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMYDATA = [
  {
    id: 294,
    date: new Date(2020, 4, 23),
    amount: 94.42,
    title: "fun in the sun",
  },
  {
    id: 283,
    date: new Date(2022, 4, 23),
    amount: 94.42,
    title: "fun in the sun",
  },
  {
    id: 293,
    date: new Date(2021, 4, 23),
    amount: 94.42,
    title: "fun in the sun",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMYDATA);
  /*React.creatElement('div', {}, React.createElement('h2', {}, "let's get started!"),
React.createElement(Expenses, {items: expenses}));*/

  const addExpenseHandler = (expense) => {
    //setExpenses([expense], ...expenses); // [expense], ...expenses not technically correct, use a special function instead that passes argument to receive latest state changes
    setExpenses((prevState) => {
      // updatating state depending on the previous state
      return [expense, ...prevState]; //better way
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
