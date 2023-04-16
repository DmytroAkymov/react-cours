// import Todo from './Todo';
// import styles from './TodoList.module.css';

// function TodoList({ todos, deleteTodo }) {
//   return (
//     <div className={styles.todoListContainer}>
//       {!todos.length && <h3>Todo list is empty</h3>}
//       {todos.map((todo, index) => (
//         <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
//       ))}
//     </div>
//   );
// }

// export default TodoList;
import React from 'react';
import Todo from './Todo';

function TodoList({ todos, tododelete }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} tododelete={tododelete} />
      ))}
    </div>
  );
}

export default TodoList;
