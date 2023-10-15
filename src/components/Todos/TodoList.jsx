import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.length === 0 && <h3>Todo list is empty</h3>}
      {todos.map((element, index) => (
        <Todo todos={element} key={index} deleteTodo={deleteTodo} index={index} />
      ))}
    </>
  );
};

export default TodoList;
