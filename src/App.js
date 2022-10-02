
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Feed from './Components/Feed';
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import Data from './Data'
import Home from './Components/Home';
import ScrollToTop from './Components/ScrollTop';

function App() {
  return (
    
    <ScrollToTop>
       <Routes>
       
         <Route  path='/' element={<Home/>}/>
         <Route  path='/gallery' element={<Gallery/>}/>
         <Route  path='/profile/:id' element={<Profile data={Data}/>}/>
         <Route path='/feed' element={<Feed data={Data}/>}/>
       </Routes>
     </ScrollToTop>  
   
      // <div>
      // <Header/>
      // <Gallery/>
      // <Profile/></div>

  );
}

export default App;
