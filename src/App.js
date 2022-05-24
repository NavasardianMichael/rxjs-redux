import { SET_TO_DO } from './redux/core/subscribe';
import { useDispatch } from './redux/hooks/useDispatch';
import { useSelector } from './redux/hooks/useSelector';
import './App.css';
import { useStore } from './redux/hooks/useStore';

function App() {

  // const age = useSelector((state) => state?.age ?? 5)
  const store = useStore()
  console.log({store});
  const dispatch = useDispatch()
  // dispatch(SET_TO_DO)

  return (
    <div className="App">
      <p>{1}</p>
      <button onClick={() => dispatch(SET_TO_DO)}>Increment</button>
    </div>
  )
}

export default App;