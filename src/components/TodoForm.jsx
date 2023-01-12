import { BsPlus } from "react-icons/bs";

const TodoForm = ({ inputText, setInputText, todos, setTodos, setStatus, update, setUpdate }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const updateTodo = () => {
    setTodos(todos.map((todo) => (todo.id === update.id ? { ...todo, text: inputText } : todo)));
    setUpdate(null);
    setInputText("");
  };

  const submitToHandler = (e) => {
    e.preventDefault();
    if (!update) {
      setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
      setInputText("");
    } else {
      updateTodo();
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto pt-40">
        <h1 className="text-center text-3xl mb-12 text-white lg:text-4xl">Ray's Todo List</h1>
        <form className="bg-slate-700 mx-auto flex flex-wrap items-center justify-evenly rounded-lg shadow-2xl shadow-cyan-500 p-12 lg:justify-center lg:w-3/4" onSubmit={submitToHandler}>
          <div className="w-full relative flex justify-center items-center lg:w-3/4">
            <input type="text" className="w-full text-xl -ml-4 pl-4 py-4 outline-none lg:text-2xl lg:w-2/3 lg:-ml-12" placeholder="Type something here" value={inputText} onChange={inputTextHandler} required />
            <button type="submit" className="absolute right-0 fill-current cursor-pointer text-cyan-400 bg-white  transition-all duration-300 ease-in-out hover:text-white hover:bg-cyan-400 lg:static">
              <BsPlus size={64} />
            </button>
          </div>

          <div className=" mt-12 relative overflow-hidden after:content-['▼'] after:absolute after:bg-white after:text-cyan-400 after:top-0 after:right-0 after:p-4 after:pointer-events-none hover:after:bg-cyan-400 hover:after:text-white after:transition-all after:duration-300 after:ease-in-out lg:mt-0">
            <select onChange={statusHandler} className="w-40 text-slate-700 appearance-none outline-none border-none cursor-pointer p-4">
              <option>All</option>
              <option>Completed</option>
              <option>Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
