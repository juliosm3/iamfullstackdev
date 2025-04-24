import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputCreate = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title.trim()) return;

    const payload = { title };

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Tarea creada correctamente");
        setTitle("");
        navigate("/"); // Redirige a la página principal
      } else {
        alert("Error al crear la tarea");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h2>Crear nueva tarea</h2>
      <input
        type="text"
        placeholder="Introduce el título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Crear</button>
    </div>
  );
};

export default InputCreate;