import { useDispatch } from './redux-rxjs/hooks/useDispatch';
import { useSelector } from './redux-rxjs/hooks/useSelector';
import { DECREMENT, INCREMENT } from './store/actionTypes';
import './App.css';

function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state?.counter.value ?? 0)

  const handleClick = ({ target: { name } }) => dispatch({ type: name })

  return (
    <div className='App'>
      <p>{counter}</p>
      <button name={DECREMENT} onClick={handleClick}>Decrement</button>
      <button name={INCREMENT} onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App;