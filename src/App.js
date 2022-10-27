import './App.css';
import Stopwatch from './Components/Stopwatch/Stopwatch';
import Alarm from './Components/Alarm/Alarm';
import Timer from './Components/Timer/Timer';
import Clock from './Components/Clock/Clock';
import Nav from './Components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='/alarm' element={<Alarm />} />
        </Routes>
    </div>
  );
}

export default App;
