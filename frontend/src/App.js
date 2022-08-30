
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './components/Login';
import RegisterForm from './components/RegisterForm';
import EventUsers from './components/EventUsers';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  
  return (
    <div className="App">

      <Router>
        <Routes>
          
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/form" element={<RegisterForm />}></Route>
          <Route path="/events" element={<EventUsers />}></Route>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
