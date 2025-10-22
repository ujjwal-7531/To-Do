import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
import ThemeContainer from "./components/ThemeContainer"

function App() {
  // const [darkTheme, setDarkTheme] = useState(false);
  const [theme, setTheme] = useState(false);

  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  const toggleTheme = () => {
    if (!theme) {
      // Switch to Light mode
      document.body.style.backgroundColor = "#000000ff";
      document.body.style.color = "#ffffffff";
    } else {
      // Switch to Dark mode
      document.body.style.backgroundColor = "#ffffffff";
      document.body.style.color =  "#000000ff";
    }
    setTheme(!theme);
  };
 

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  console.log(todos);

  return (
    <main className={`min-h-screen flex flex-col items-center p-6 transition-colors duration-500
  ${theme ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>


      <ThemeContainer theme={theme} toggleTheme={toggleTheme} />
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;