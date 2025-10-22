import React from "react";

function Todo({ todo, index, delTodo, theme }) {
  return (
    <div
      className={`flex justify-between items-center w-full max-w-md p-4 mb-3 rounded-lg border transition-colors duration-300
  ${theme ? "bg-gray-900 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"}`}



    >
      <p className="break-words">{todo}</p>
      <div className="flex items-center gap-2">
        <input type="checkbox" className="w-5 h-5 accent-blue-500" />
        <button
          onClick={() => delTodo(index)}
          className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-300
        ${
          theme
            ? "bg-red-500 hover:bg-red-400 text-gray-900"
            : "bg-red-600 hover:bg-red-500 text-white"
        }`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
