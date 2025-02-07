import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import ListPlayers from './ListPlayers';
import CreatePlayer from './CreatePlayer';
import SinglePlayer from './SinglePlayer';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ListPlayers/>}/>
        <Route path="/ujsakkozo" element={<CreatePlayer/>}/>
        <Route path="/Player/:id" element={<SinglePlayer/>}/>
      </Routes>
    </div>
  );
}

export default App;
