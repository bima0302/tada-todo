import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className=''>
      <div className='max-w-sm mx-auto bg-white'>
        {/* header */}
        <Header />
        {/* body */}
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
        {/* footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};
