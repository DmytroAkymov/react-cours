// import { RiTodoFill } from 'react-icons/ri';
// import styles from './Todo.module.css';

// function Todo(props) {
//   const { todo, index, deleteTodo } = props;
//   console.log(props);
//   return (
//     <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
//       <RiTodoFill className={styles.todoIcon} />
//       <div className={styles.todoText}>{todo}</div>
//     </div>
//   );
// }

// export default Todo;
import React from 'react';

function Todo({ todo, tododelete, index }) {
  return (
    <div onDoubleClick={() => tododelete(index)}>
      <div>{todo}</div>{' '}
    </div>
  );
}

export default Todo;
