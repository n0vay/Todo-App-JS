import { useState } from "react";

function App() {
  const title = "Welcome To ToDo List";
  const [act, setAct] = useState("");
  const [cid, setCid] = useState(4);
  const [task, setTask] = useState([
    { action: "Study Hard", id: 1 },
    { action: "Play Hard", id: 2 },
    { action: "Work Hard", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
  };

  setTimeout(() => {
    let temp = [{ action: "abc", id: cid }];
    temp = [...task, ...temp];
    setCid(cid + 1);
    setTask(temp);
    setAct("");
  }, 5000);

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>We Remember so you don't have to</h2>
      <input
        type="text"
        required
        value={act}
        onChange={(e) => setAct(e.target.value)}
      />
      <button
        onClick={() => {
          let temp = [{ action: act, id: cid }];
          temp = [...task, ...temp];
          setCid(cid + 1);
          setTask(temp);
          setAct("");
        }}
      >
        {" "}
        Add Task{" "}
      </button>
      {task.map((task) => (
        <div className="task-preview" key={task.id}>
          <h2>{task.action}</h2>
          <button
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
