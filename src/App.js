import { StudentProvider } from './Components/StudentContext';

import Header from './Components/Header';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import './Components/Style.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div >
        <StudentProvider>
          <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
              </Routes>
          </Router>
    </StudentProvider>
    </div>
  );
}

export default App;
