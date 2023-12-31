import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const TodoList = () => {
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div 
      style = {{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center"
      }} 
      className="ui list"
    >
      <p className="item">
        Plan the family trip
      </p>
      <p className="item">
        Go shopping for dinner
      </p>
      <p className="item">
        Go for a walk
      </p>
      <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
    </div>
  );
}

export default TodoList;
