import './Todo.css'
import TodoHeader from "./TodoHeader";
import TodoBackground from "./TodoBackground";



function TodoApp() {
  return (
    <>
      <div className="relative w-full h-[-webkit-fill-available] bg-zinc-800">
        <TodoBackground />
        <TodoHeader />
        
      </div>
    </>
  );
}

export default TodoApp;
