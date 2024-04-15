import React from "react";

const ListTodo = ({todos}) => {
  return (
    <>
      {todos.map(function (todo) {
        return (
          <>
            <h4>ListTodo</h4>
            <h5>{todo.title}</h5>
            <h5>{todo.description}</h5>
            <h5>{todo.completed}</h5>
          </>
        );
      })}
    </>
  );
};

export default ListTodo;
