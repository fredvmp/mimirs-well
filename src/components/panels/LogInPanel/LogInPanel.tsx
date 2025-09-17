import { useState } from "react";
import styles from "./LoginPanel.module.css";
import { BasicButton } from "../../buttons/BasicButton";

export default function LoginPanel() {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Login correcto");
        localStorage.setItem("token", data.token); // Guardar el token JWT
        setCredentials({ identifier: "", password: "" });
      } else {
        setMessage(`Error: ${data.error || "No se pudo iniciar sesión"}`);
      }
    } catch (err) {
      setMessage("Error de conexión con el servidor");
    }
  };

  return (
    <div className={styles.loginWrap}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="identifier">Username or Email</label>
          <input
            type="text"
            id="identifier"
            placeholder="Enter your username or email"
            name="identifier"
            value={credentials.identifier}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <button type="submit">Submit</button>
          <BasicButton title="Reset" />
        </fieldset>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
