import { useState } from 'react';
import './App.css';
import TodoForm from './componends/TodoForm';
import TodoList from './componends/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
