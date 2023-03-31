import './App.css';

import Footer2 from './components/Footer2';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Middle from './components/Middle';
import About from './components/About';
import Instrument from './components/Instrument';
import data from './data/data.json'
import Middle2 from './components/Middle2'
import Crypto from './components/Crypto'
import Stock from './components/Stock';
import Contact from './components/Contact'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/SignIN" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/About' element={<About aboutitems={data.about}/>} />
          <Route path='/' element={<><Navbar /><Middle /><Middle2 /><Instrument items={data.instrument} /><Footer2 /></>} />
          <Route path='/instruments/crypto' element={<Crypto/>}/>
          <Route path='/instruments/stocks' element={<Stock/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>

      </div>
    </Router >
  );
}

export default App;
