import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WordAndNums from './components/WordAndNums';

function App() {
  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:wordornum' element={<WordAndNums />} />
        <Route path='/:wordornum/:color/:backgroundColor' element={<WordAndNums />} />
      </Routes>
    </div>
  );
}

export default App;
