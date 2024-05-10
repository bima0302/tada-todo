import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

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

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (id, newValue) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: newValue, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className=''>
      <div className='max-w-sm mx-auto bg-white'>
        {/* header */}
        <Header />
        {/* body */}
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={updateTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
        {/* footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};
