import React from "react";
import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
export default function Todolist({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <Todoitem key={item} item={item} />
      ))}
    </div>
  );
}
