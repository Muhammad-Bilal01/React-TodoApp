import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      todo: "Ghous",
      disabled: true,
    },
    {
      todo: "Bilal",
      disabled: true,
    },
  ]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, { todo: value, disabled: true }]);
    setValue("");
  };

  const deleteTodo = (i) => {
    const oldTodos = [...todos];
    oldTodos.splice(i, 1);
    setTodos(oldTodos);
  };

  const deleteAllTodo = () => {
    setTodos([]);
  };

  return (
    <>
      <h1 className="heading">Todo App</h1>
      <div className="todoBox">
        <div className="input-box">
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          {/* <input
          type="text"
          name="Todo"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        /> */}

          <Button variant="contained" onClick={addTodo}>
            Add Todo
          </Button>
          {/* <button onClick={addTodo}>Add Todo</button> */}

          {/* <button onClick={deleteAllTodo}>Delete All</button> */}
          <Button variant="contained" onClick={deleteAllTodo} color="error">
            Delete All
          </Button>
        </div>
        <ul>
          {todos.map((v, i) => (
            <li key={i}>
              {/* <input
                type="text"
                disabled={v.disabled}
                defaultValue={v.todo}
                onChange={(e) => (v.todo = e.target.value)}
              /> */}
              <TextField
                id="outlined-basic"
                variant="standard"
                disabled={v.disabled}
                defaultValue={v.todo}
                onChange={(e) => {
                  v.todo = e.target.value;
                }}
              />
              {v.disabled ? (
                <Button
                  variant="outlined"
                  onClick={() => {
                    let oldTodos = [...todos];
                    oldTodos.splice(i, 1, { ...v, disabled: false });
                    setTodos(oldTodos);
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    v.disabled = true;
                    setTodos([...todos]);
                  }}
                >
                  Update
                </Button>
              )}
              <Button
                onClick={() => deleteTodo(i)}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoApp;
