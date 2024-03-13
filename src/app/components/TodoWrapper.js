import { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
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
      console.log(todos),
    ]);
  };
  return (
    <div className=''>
      <div className='max-w-sm mx-auto bg-white'>
        {/* header */}
        <Header />
        {/* body */}
        <TodoForm addTodo={addTodo} />
        {/* <Todo /> */}
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};
