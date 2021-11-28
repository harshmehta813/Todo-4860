import React, { useState } from "react";

function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <div style={{ padding: 4 }}>
        <input
          placeholder="Add a To-do..."
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
      </div>
      <input type="submit" value="+" />
    </form>
  );
}

export default TodoInput;
