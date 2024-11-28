import React from "react";

function SummaryReport({ members, expenses }) {
  const calculateBalances = () => {
    const balances = {};
    members.forEach((member) => {
      balances[member] = 0;
    });

    expenses.forEach(({ amount, payer, beneficiaries }) => {
      const share = amount / beneficiaries.length;
      balances[payer] += amount;
      beneficiaries.forEach((beneficiary) => {
        balances[beneficiary] -= share;  // subtract the individual share
      });
    });

    return balances;
  };

  const balances = calculateBalances();

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Summary Report</h2>
      <ul className="space-y-2 mb-4">
        {Object.keys(balances).map((member) => (
          <li key={member} className="flex justify-between px-3 py-2 bg-gray-100 rounded-lg">
            <span>{member}</span>
            <span>
              {balances[member] > 0
                ? `Owed ₹${balances[member].toFixed(2)}`
                : `Owes ₹${Math.abs(balances[member]).toFixed(2)}`}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const report = Object.entries(balances)
            .map(([member, balance]) =>
              `${member}: ${
                balance > 0 ? `Owed ₹${balance.toFixed(2)}` : `Owes ₹${Math.abs(balance).toFixed(2)}`
              }`
            )
            .join("\n");
          navigator.clipboard.writeText(report);
        }}
        className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
      >
        Copy Report
      </button>
    </div>
  );
}

export default SummaryReport;


// A balance is positive if a member is owed money (i.e., they paid more than their fair share).
// A balance is negative if a member owes money (i.e., they benefited from others’ payments)


// Object.keys(balances):

// Retrieves all the keys (i.e., member names) from the balances object

//Object.entries(balances) converts the balances object into an array of key-value pairs.

// navigator.clipboard: This is a browser API that provides access to the system clipboard. It's a built-in object in modern browsers that allows you to interact with the clipboard programmatically.

// writeText(report): The writeText method is used to write (copy) a string (report in this case) to the clipboard. It takes a single argument, which is the text you want to copy, and stores it in the clipboard.
