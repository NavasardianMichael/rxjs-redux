import { useDispatch } from './redux/hooks/useDispatch';
import { useSelector } from './redux/hooks/useSelector';
import { DECREMENT, INCREMENT } from './store/actionTypes';
import './App.css';

function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state?.counter ?? 0)

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
      <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
    </div>
  )
}

export default App;