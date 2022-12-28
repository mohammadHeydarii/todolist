import "./App.css";
import { useSelector } from "react-redux";
import Input from "./components/Inputs/Input";
import TodoItem from "./components/TodoItem";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} item={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
