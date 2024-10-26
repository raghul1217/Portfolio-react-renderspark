import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home1 from './pages/Home1';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home1/>}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
