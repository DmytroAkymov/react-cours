// import { useState } from 'react';
// import TodoForm from './components/Todos/TodoForm';
// import TodoList from './components/Todos/TodoList';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodoHandler = (text) => {
//     setTodos([...todos, text]);
//   };
//   const deleteTodoHandler = (index) => {
//     setTodos(todos.filter((_, idx) => idx !== index));
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodoHandler} />
//       <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import OurTeam from './components/OurTeam/OurTeam';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    setTodos([...todos, text]);
  }

  function todoDeleteHandler(index) {
    setTodos(todos.filter((_, idx) => idx !== index));
  }

  return (
    <div className="App">
      <h1>App todo</h1>
      <OurTeam />
      <TodoForm addtodo={addTodoHandler} />
      <TodoList todos={todos} tododelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
