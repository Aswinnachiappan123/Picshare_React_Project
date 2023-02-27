import Home from'./Home'
import './App.css';
import Landingpage from'./Landingpage'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Main from './Main';
//import Guidelines from'./Guidelines'
//import Contact from'./Contact'
//<Router>
//<Routes>
//<Route path="/" element={<Landingpage/>} />
//<Route path="/home" element={<Home/>} />
//<Route path="guide" element={<Guidelines/>} />
//<Route path="/guide/contact" element={<Contact />} />
//</Routes>
//</Router>
function App() {
  return (
    <Landingpage/>
  );
}

export default App
