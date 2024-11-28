import React, { useState } from "react";
import GroupManager from "./components/GroupManager";
import ExpenseForm from "./components/ExpenseForm";
import SummaryReport from "./components/SummaryReport";

function App() {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-teal-600 mb-6">
          Expense Splitter
        </h1>
        <GroupManager members={members} setMembers={setMembers} />
        <ExpenseForm members={members} expenses={expenses} setExpenses={setExpenses} />
        <SummaryReport members={members} expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
