// To inform next js, this is a client component
"use client";

// Import useState from 'react' library
import { TodoWrapper } from "./components/TodoWrapper";

export default function Home() {
  return (
    <>
      <div className='App'>
        {/* App */}
        <TodoWrapper />
      </div>
    </>
  );
}
