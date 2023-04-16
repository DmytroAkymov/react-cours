import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} />
      ))}
    </div>
  );
}

export default TodoList;
