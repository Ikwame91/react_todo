import React from "react";
import styles from "./todoitem.module.css";

export default function Todoitem({ item }) {

  function handleDelete(item) {
    console.log("Delete button clicked for item: ", item);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {" "}
        {item}{" "}
        <span>
          <button  onClick={()=>handleDelete(item)} className={styles.delete}>
            x
          </button>
        </span>{" "}
      </div>
      <hr className={styles.line} />
    </div>
  );
}
