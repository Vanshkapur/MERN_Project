import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { DashBoard } from './modules/quiz/pages/DashBoard';

function App() {
  return (
     <BrowserRouter>
    <DashBoard/>
    </BrowserRouter> 
  );
}

export default App;
