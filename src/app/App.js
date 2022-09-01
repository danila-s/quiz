import './App.css';
import {Routes , Route} from 'react-router-dom'
import MainLayout from "../components/layouts/main-layout"
import Menu from './menu'
import Game from './game'
import Records from './records'
import MissionFailed from './mission-failed'

function App() {

  return (
    <MainLayout
    children={
      <Routes>
        <Route path='/' element={<Menu />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/records' element={<Records />}/>
        <Route path='/missionFailed' element={<MissionFailed />}/>
      </Routes>
      }
      />
  );
}

export default App;
