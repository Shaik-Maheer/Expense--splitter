import React, { useState } from "react";

function ExpenseForm({ members, expenses, setExpenses }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState("");
  const [beneficiaries, setBeneficiaries] = useState([]);

  const addExpense = () => {
    if (description && amount && payer && beneficiaries.length) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        payer,
        beneficiaries,
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
      setPayer("");
      setBeneficiaries([]);
    }
  };

  const toggleBeneficiary = (name) => {
    if (beneficiaries.includes(name)) {
      setBeneficiaries(beneficiaries.filter((beneficiary) => beneficiary !== name));
    } else {
      setBeneficiaries([...beneficiaries, name]);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Expense</h2>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          placeholder="Amount"
        />
        <select
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
        >
          <option value="">Select Payer</option>
          {members.map((member, index) => (
            <option key={index} value={member}>
              {member}
            </option>
          ))}
        </select>
      </div>
      <h4 className="text-gray-600 mb-2">Select Beneficiaries:</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {members.map((member, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={beneficiaries.includes(member)}
              onChange={() => toggleBeneficiary(member)}
              className="form-checkbox text-teal-500"
            />
            <span>{member}</span>
          </label>
        ))}
      </div>
      <button
        onClick={addExpense}
        className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;