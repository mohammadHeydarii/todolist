import Checkbox from "@mui/material/Checkbox";
import React from "react";
import "./TodoItem.css";
import { setCheck } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ name, done, id }) => {
  const [checked, setChecked] = React.useState(false);

  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div className="todoItem">
        {/* <Checkbox
          checked={done}
          color="primary"
          onChange={handleCheck}
          inputProps={{ "aria-label": "secondary checkbox" }}
        /> */}
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p className={checked && "todoItem--done"}>{name}</p>
      </div>
    </>
  );
};

export default TodoItem;
