function TaskItem({
  task,
  editingId,
  editTitle,
  editDescription,
  setEditTitle,
  setEditDescription,
  startEdit,
  saveEdit,
  cancelEdit,
  handleDelete
}) {
  const isEditing = editingId === task.id;

  return (
    <li className="task-row">

      {isEditing ? (
        <div style={{ width: "100%" }}>

          <input
            className="input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Título"
          />

          <input
            className="input"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Descripción"
          />

          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button
              className="pill-btn"
              onClick={() => saveEdit(task.id)}
            >
              Guardar
            </button>

            <button
              className="pill-btn"
              onClick={cancelEdit}
            >
              Cancelar
            </button>
          </div>

        </div>

      ) : (
        <>
          <div className="task-text">
            <div className="task-title">
              {task.title}
            </div>

            <div className="task-desc">
              {task.description}
            </div>
          </div>

          <div>
            <button
              className="pill-btn"
              onClick={() => startEdit(task)}
            >
              Editar
            </button>

            <button
              className="pill-btn"
              onClick={() => handleDelete(task.id)}
            >
              Borrar
            </button>
          </div>
        </>
      )}

    </li>
  );
}

export default TaskItem;
