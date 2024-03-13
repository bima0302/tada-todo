import { Footer } from "../Footer";
import { Header } from "./Header";
import { TodoForm } from "./TodoForm";

export const TodoWrapper = () => {
  return (
    <>
      <div className='max-w-sm mx-auto'>
        {/* header */}
        <Header />
        {/* body */}
        <TodoForm />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};
