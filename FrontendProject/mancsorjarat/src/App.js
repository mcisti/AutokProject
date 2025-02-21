import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import ListPlayers from './ListPlayers';
import SinglePlayer from './SinglePlayer';
import LoginPeople from './LoginPeople';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPlayers/>}/>
        <Route path="/Player/:id" element={<SinglePlayer/>}/>
        <Route path="/login" element={<LoginPeople/>}/>
      </Routes>
    </div>
  );
}

export default App;
