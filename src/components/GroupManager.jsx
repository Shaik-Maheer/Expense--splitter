import React, { useState } from "react";

function GroupManager({ members, setMembers }) {
  const [name, setName] = useState("");

  const addMember = () => {
    if (name && !members.includes(name)) {
      setMembers([...members, name]);
      setName("");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Group Members</h2>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          placeholder="Enter member name"
        />
        <button
          onClick={addMember}
          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {members.map((member, index) => (
          <li key={index} className="px-3 py-2 bg-gray-100 rounded-lg">
            {member}
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default GroupManager;
