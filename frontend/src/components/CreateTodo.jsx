import axios from "axios";
import { useState } from "react";

export function CreateTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        id="description"
        placeholder="description"
        onChange={(e) => {
          setDescripton(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={async () => {
          const _res = await axios.post("http://localhost:5050/todo", {
            title: title,
            description: description,
          });
          setTodos([
            ...todos,
            {
              title,
              description,
            },
          ]);
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
