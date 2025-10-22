import React from "react";

function InputContainer({inputVal , writeTodo , addTodo, theme}) {
  return (
    <div className="flex w-full max-w-md mb-6">
  <input
    type="text"
    value={inputVal}
    onChange={writeTodo}
    className={`flex-grow p-3 rounded-l-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300
  ${theme ? "bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-400" : "bg-white text-gray-900 border-gray-300 placeholder-gray-500"}`}

    placeholder="Add a new task..."
  />
  <button
    onClick={addTodo}
    className={`p-3 rounded-r-lg font-bold transition-colors duration-300
      ${theme ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400" : "bg-blue-500 text-white hover:bg-blue-400"}`}
  >
    +
  </button>
</div>

  );
}

export default InputContainer;