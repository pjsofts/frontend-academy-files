import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  return (
    <div>
      Hello
      <div>count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Add count
      </button>
      <div>
        <input onChange={(e)=>{setTask(e.target.value)}} value={task} type="text" placeholder="enter new task" />
        <div>Task is: {task}</div>
        <button onClick={()=>{
          setTodos([...todos, task])
          setTask("");
        }}>Add task</button>
      </div>
      <h2>Todo list</h2>
      <div>
        {todos.map((todo)=>{
          return <div>{todo}</div>
        })}
      </div>
    </div>
  );
}

export default App;
