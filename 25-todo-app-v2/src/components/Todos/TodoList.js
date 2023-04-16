import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodoHandler }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h3>Todo list is empty</h3>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodoHandler}
        />
      ))}
    </div>
  );
}

export default TodoList;
