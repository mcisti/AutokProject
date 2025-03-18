import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListCars from './ListCars';
import CreateCar from './CreateCar';
import SingleCar from './SingleCar';
import UpdateCar from './UpdateCar';
import LoginPeople from './LoginPeople';

function App() {


  return (
    <div>

    <Routes>
      <Route path='/' element={<ListCars/>}/>
      <Route path='/newcar' element={<CreateCar/>}/>
      <Route path='/car/:id' element={<SingleCar/>}/>
      <Route path='/updatecar/:id' element={<UpdateCar/>}/>
      <Route path='/login' element={<LoginPeople/>}/>
    </Routes>

    </div>
  );
}

export default App;