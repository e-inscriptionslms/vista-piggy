import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import { useEffect } from 'react';
import Aos from 'aos';


function App() {
  useEffect(()=>{
    Aos.init()
  })
  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      {/* other page route code write here... */}
      <Route path='' element={<Home/>}/>
      </Route>
   </Routes>
   </>
  );
}

export default App;
