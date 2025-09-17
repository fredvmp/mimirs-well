import { useFormState } from "react-dom";
import styles from "./SignUpPanel.module.css";
import { BasicButton } from "../../buttons/BasicButton";
import { useState, type ReactElement, type ReactEventHandler } from "react";

export default function SignUpPanel() {
  interface FormElements extends HTMLFormControlsCollection {
    usernameInput: HTMLInputElement;
    emailInput: HTMLInputElement;
    passInput: HTMLInputElement;
    passConfInput: HTMLInputElement;
  }
  interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const {} = useFormState;
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user.password !== user.passwordConf) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password,
          passwordConf: user.passwordConf,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Usuario creado con éxito!");
        setUser({
          name: "",
          username: "",
          email: "",
          password: "",
          passwordConf: "",
        });
      } else {
        setMessage(`Error: ${data.error || "No se pudo crear el usuario"}`);
      }
    } catch (err) {
      setMessage("Error de conexión con el servidor");
    }
  };

  return (
    <div className={styles.signUpWrap}>
      <h2>Sign up!</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={user.name}
            onChange={handleChange}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            name="username"
            value={user.username}
            onChange={handleChange}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            id="password1"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            placeholder="Confirm your password"
            name="passwordConf"
            value={user.passwordConf}
            onChange={handleChange}
          ></input>
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
