
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header'
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import Data from './Data'
function App() {
  return (
       <Routes>
       
         <Route  path='/' element={<Gallery/>}/>
         <Route  path='/profile/:id' element={<Profile data={Data}/>}/>
       </Routes>
      // <div>
      // <Header/>
      // <Gallery/>
      // <Profile/></div>

  );
}

export default App;
