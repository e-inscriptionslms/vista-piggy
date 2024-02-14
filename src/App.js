import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import { useEffect } from 'react';
import Aos from 'aos';
import MainBlogPage from './pages/mainBlogPage';
import BlogPage from './pages/BlogPage';
import CategoriesPage from './pages/CategoriesPage';


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
      <Route path='/main' element={<BlogPage/>}/>
      <Route path='/blog' element={<MainBlogPage/>}>
        <Route path='mythology' element={<CategoriesPage/>}/>
        <Route path='technology' element={<CategoriesPage/>}/>
        <Route path='weird' element={<CategoriesPage/>}/>
        <Route path='animals' element={<CategoriesPage/>}/>
        <Route path='entertainment' element={<CategoriesPage/>}/>
        <Route path='history' element={<CategoriesPage/>}/>
      </Route>
      {/* <Route path='/' element={} /> */}
      </Route>
   </Routes>
   </>
  );
}

export default App;
