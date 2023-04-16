// import { useState } from 'react';
// import styles from './TodoForm.module.css';

// function TodoForm({ addTodo }) {
//   const [text, setText] = useState('');
//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     addTodo(text);
//     setText('');
//   };

//   return (
//     <div className={styles.todoFormContainer}>
//       <form onSubmit={onSubmitHandler}>
//         <input
//           placeholder="Enter new todo"
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//         ></input>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default TodoForm;
import React, { useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm({ addtodo }) {
  const [text, setText] = useState('');

  function addTodoHandler(event) {
    event.preventDefault();
    addtodo(text);
    setText('');
  }

  return (
    <div className={style.todoFormContainer}>
      <form onSubmit={addTodoHandler}>
        <input
          value={text}
          placeholder="Input text"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button value="submit">Click me</button>
      </form>
    </div>
  );
}

export default TodoForm;
