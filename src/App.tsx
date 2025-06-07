import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "./redux/user-slice";
import { userSelector } from "./redux/user-slice";
import { Button } from "./components/ui/button";

function App() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const setUserHandler = () => dispatch(
    userSlice.actions.setUser({
      name: "John Doe",
      email: "nondasdase",
      birthdate: "sdsadsadasdsds",
      createdAt: Date(),
    })
  );

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={setUserHandler}>click to set user</Button>
        <p>
          user:{user.name}
          <br />
          created at:{user.createdAt}
          <br />
        </p>
      </div>
    </>
  );
}

export default App;
