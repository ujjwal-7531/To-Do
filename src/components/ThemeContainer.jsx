import React from 'react'

function ThemeContainer({theme, toggleTheme}) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-6">
      {/* Centered title */}
      <h1 className="text-3xl font-bold text-center">To-Do List</h1>

      {/* Theme button top-right */}
      <button
  className={`absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300
    ${theme 
      ? "bg-indigo-500 text-gray-100 hover:bg-indigo-400" 
      : "bg-blue-500 text-white hover:bg-blue-400"}`}
  onClick={toggleTheme}
>
  <span className="text-lg">{theme ? "🌙" : "☀️"}</span>
  {theme ? "Light" : "Dark"}
</button>

    </div>
  );
}

export default ThemeContainer;
