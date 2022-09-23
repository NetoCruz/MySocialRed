
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Feed from './Components/Feed';
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import Data from './Data'
import Home from './Components/Home';

function App() {
  return (
    
       <Routes>
       
         <Route  path='/' element={<Home/>}/>
         <Route  path='/gallery' element={<Gallery/>}/>
         <Route  path='/profile/:id' element={<Profile data={Data}/>}/>
         <Route path='/feed' element={<Feed data={Data}/>}/>
       </Routes>
       
   
      // <div>
      // <Header/>
      // <Gallery/>
      // <Profile/></div>

  );
}

export default App;
