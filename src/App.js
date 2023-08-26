import "./App.css";
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 id="header">Todo List</h1>
      <div>
        <input id='input-bar'
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        &nbsp;&nbsp;&nbsp;
        <button id='taskbutton' onClick={addTodo}>Add</button>
      </div>
      <ul style={{listStyle:"none"}}>
        {todos.map((todo, index) => (
          <li key={index}>
            {index+1 } &nbsp; &nbsp; {todo} &nbsp; &nbsp;
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
