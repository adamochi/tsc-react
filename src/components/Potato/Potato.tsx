import React, { useEffect, useRef, useState } from "react";
import "./potato.scss";

interface TODO {
  name: string;
  checked: boolean;
  readonly id: number;
}

const Potato = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([] as TODO[]);
  const banana = useRef(document.createElement("input"));

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      return setTodos(parsed);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    return localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event: { preventDefault: any }) => {
    event.preventDefault();
    const onlySpaces = (str: string) => {
      return str.trim().length === 0;
    };
    const data: string = banana.current.value;
    if (data === "" || onlySpaces(data)) return;
    const newTodoObj: TODO = {
      name: todo,
      checked: false,
      id: Date.now(),
    };
    setTodos([newTodoObj, ...todos]);
    setTodo("");
    return (banana.current.value = "");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value.trim());
  };
  ////////////////////////////////////////////////////////////////////////////////////
  const handleRemove = (e: any) => {
    const id = JSON.parse(e.target.id);
    return setTodos(todos.filter((item) => item.id !== id));
  };
  ////////////////////////////////////////////////////////////////////////////////////
  //
  function createRipple(event: any) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }
  //
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = JSON.parse(e.target.id);
    const itemChecked = e.target.checked;
    let thisTODO = todos.filter((todo) => todo.id === id);

    itemChecked ? (thisTODO[0].checked = true) : (thisTODO[0].checked = false);
    const saveChecked = todos.map((todo) => {
      if (todo.id === id) {
        if (!thisTODO[0].checked) {
          return { ...todo, checked: false };
        } else {
          return { ...todo, checked: true };
        }
      }
      return todo;
    });
    setTodos(saveChecked);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          ref={banana}
          id="input"
          type="text"
          placeholder="type something"
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="todos_outer-div">
        {todos.map((item) => (
          <div id="todos_div" key={item.id}>
            <div>
              <input
                type="checkbox"
                id={`${item.id}`}
                onChange={handleChecked}
                checked={item.checked}
              />
              <span
                className="item_span"
                style={{
                  textDecoration: item.checked ? "line-through" : "",
                  textDecorationColor: item.checked
                    ? "rgba(5, 255, 255, 0.7)"
                    : "",
                }}
              >
                {item.name}
              </span>
              <span className="time-of_span">
                {" "}
                @ {new Date(item.id).getHours().toString().padStart(2, "0")}:
                {new Date(item.id).getMinutes().toString().padStart(2, "0")}
                {new Date(item.id).getHours() > 11 ? "pm" : "am"}
              </span>
            </div>
            <button id={`${item.id}`} onClick={handleRemove}>
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Potato;
