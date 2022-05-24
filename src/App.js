import { SET_TO_DO } from './redux/core/subscribe';
import { useDispatch } from './redux/hooks/useDispatch';
import { useSelector } from './redux/hooks/useSelector';
import './App.css';

function App() {

  const age = useSelector((state) => state?.age ?? 5)
  const dispatch = useDispatch()
  dispatch(SET_TO_DO)

  return (
    <div className="App">
      <p>{age ?? 1}</p>
      <button onClick={() => dispatch(SET_TO_DO)}>Increment</button>
    </div>
  )
}

export default App;