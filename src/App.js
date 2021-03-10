import React from "react";
import "./styles.css";

import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn">ADD</button>
        <h1 className="header-title">TODO LIST</h1>
        <button className="header-btn main-btn-color">CLEAR</button>
      </section>

      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn">Add</button>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">Todo Text</span>
        </div>
      </section>
    </Paper>
  );
}
