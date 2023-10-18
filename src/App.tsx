import { Outlet } from "react-router-dom";

import classes from "./App.module.css";

function App() {
  
  return (
      <div className={classes.app}>
        <h1>GitHub Buscador</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        <h2></h2>
        <Outlet />
      </div>
  );
}

export default App;