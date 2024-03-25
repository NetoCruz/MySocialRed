
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Feed from './Components/Feed';
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import Data from './Data'
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollTop';
import Photos from './Components/Photos';
import User from './Components/User'

function App() {
  return (
    
    <ScrollToTop>
       <Routes>
       
         <Route  path='/' element={<Home/>}/>
         <Route  path='/gallery' element={<Gallery/>}/>
         <Route  path='/user' element={<User/>}/>
         <Route  path='/profile/:id' element={<Profile data={Data}/>}/>
         <Route path='/feed' element={<Feed data={Data}/>}/>
         <Route path='/photos/:id' element={<Photos data={Data}/>}/>
       </Routes>
     </ScrollToTop>  
   
      // <div>
      // <Header/>
      // <Gallery/>
      // <Profile/></div>

  );
}

export default App;
