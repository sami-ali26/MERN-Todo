import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/todos").then((response) => {
      setTodos(response.data.allTodo);
    });
  }, []);
  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
