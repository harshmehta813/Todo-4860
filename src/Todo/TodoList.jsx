function TodoList({ data, handleDelete, handleToggle }) {
  return (
    <ul>
      {data.map((item) => (
        <div className={item.status ? "done" : "pending"}>
          <li key={item.id}>{item.title}</li>
          <button
            className="deleteBtn"
            onClick={() => handleDelete(item.id)}
          ></button>
          <button
            className="toggleBtn"
            onClick={() => handleToggle(item.id)}
          ></button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
