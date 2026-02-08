const BASE_URL = "http://localhost:3000/api/tasks";

export async function getTasks() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error fetching tasks");
  return res.json();
}

export async function createTask(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Error creating task");
  return res.json();
}

export async function updateTask(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Error updating task");
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("Error deleting task");
  return res.json();
}
