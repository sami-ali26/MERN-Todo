import axios from "axios";

export function Todos({ todos }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {todos.map(function (todo) {
        return (
          <div>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
            <button
              onClick={() => {
                axios.put("http://localhost:5050/completed", {
                  id: todo._id,
                });
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as Done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
