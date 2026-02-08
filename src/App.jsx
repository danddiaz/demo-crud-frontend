import { useEffect, useState } from "react";

import { getTasks, createTask, deleteTask, updateTask } from "./api/tasks";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
      alert("Error cargando tareas");
    } finally {
      setLoading(false);
    }
  }

 async function handleCreate(data) {
    console.log("CREATE DATA:", data);
    await createTask(data);
    await loadTasks();
  }


  async function handleDelete(id) {
    const ok = confirm("¿Borrar tarea?");
    if (!ok) return;

    await deleteTask(id);
    await loadTasks();
  }

  function startEdit(task) {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  }

  async function saveEdit(id) {
    await updateTask(id, {
      title: editTitle,
      description: editDescription
    });

    setEditingId(null);
    await loadTasks();
  }

  return (
    <div className="page">

      {/* HEADER FULL WIDTH */}
      <div className="header">
        TaskManager
      </div>

      {/* COLUMNA CENTRADA */}
      <div className="app">
        <div className="card">

          <div className="form-wrap">
            <TaskForm onCreate={handleCreate} />
          </div>

          <div className="section-title">
            Mis Tareas
          </div>

          {loading ? (
            <p>Cargando...</p>
          ) : (
            <TaskList
              tasks={tasks}
              editingId={editingId}
              editTitle={editTitle}
              editDescription={editDescription}
              setEditTitle={setEditTitle}
              setEditDescription={setEditDescription}
              startEdit={startEdit}
              saveEdit={saveEdit}
              setEditingId={setEditingId}
              handleDelete={handleDelete}
            />
          )}

        </div>
      </div>
    </div>
  );




}

export default App;
