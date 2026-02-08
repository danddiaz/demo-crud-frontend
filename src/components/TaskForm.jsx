import { useState } from "react";

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (title.length < 3 || description.length < 3) {
      setError("Título y descripción deben tener mínimo 3 caracteres");
      return;
    }

    setError("");

    try {
      setSaving(true);

      await onCreate({
        title,
        description,
        completed: false
      });

      setTitle("");
      setDescription("");

    } catch (err) {
      setError("Error creando tarea");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>

      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />

      {error && (
        <p style={{ color: "red", marginTop: 6 }}>
          {error}
        </p>
      )}

      <button className="primary-btn">
        Crear tarea
        </button>


    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  borderRadius: 6,
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "90%%",
  padding: 10,
  borderRadius: 6,
  border: "none",
  background: "#5e5146",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

export default TaskForm;

