import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
     <div className={styles.formcontainer}>
     <input
      className={styles.todoinput}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder="Add a todo"
      />
      <button 
      className={styles.todoButton}
      type="submit">Add</button>
     </div>
    </form>
  );
}
