import React from "react";

const TodoForm = () => {
  return (
    <section className="add">
      <form className="add-form">
        <input type="text" className="add-input" />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
