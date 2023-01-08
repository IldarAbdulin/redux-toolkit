import { useSelector, useDispatch} from "react-redux";
import { increment, decrement } from "./store";

function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {count}
      <button onClick={() => dispatch(increment())}>plus</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
    </div>
  );
}

export default App;
