import styles from "./Todo.module.css";
import { AiFillFlag } from "react-icons/ai";

const Todo = ({ todos, deleteTodo, index }) => {
  return (
    <div className={styles.box} onDoubleClick={() => deleteTodo(index)}>
      <AiFillFlag className={styles.icon} />
      <h4 className={styles.text}>{todos}</h4>
    </div>
  );
};

export default Todo;
