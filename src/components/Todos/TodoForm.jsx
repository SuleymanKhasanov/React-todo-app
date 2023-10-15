import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder="Type new task"
      />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
