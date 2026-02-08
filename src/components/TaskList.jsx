import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  editingId,
  editTitle,
  editDescription,
  setEditTitle,
  setEditDescription,
  startEdit,
  saveEdit,
  setEditingId,
  handleDelete
}) {
  if (tasks.length === 0) {
    return <p>No hay tareas aún</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          editingId={editingId}
          editTitle={editTitle}
          editDescription={editDescription}
          setEditTitle={setEditTitle}
          setEditDescription={setEditDescription}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={() => setEditingId(null)}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
