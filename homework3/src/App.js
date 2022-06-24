import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import { changeTitleAction } from './redux/actions/actions';

function App() {

  const dispatch = useDispatch()
  const title = useSelector(state => state.title.title)

  useEffect(() => {
    dispatch(changeTitleAction())
  },[])

  return (
    <div className="App">
     {title}

     <MainPage/>
    </div>
  );
}

export default App;
