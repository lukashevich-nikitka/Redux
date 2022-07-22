import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 1})
  }
  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 1})
  }
  return (
    <div className='app'>
      <div>{cash}</div>
      <div className='buttons'>
        <button onClick={addCash}>Пополнить счет</button>
        <button onClick={getCash}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
