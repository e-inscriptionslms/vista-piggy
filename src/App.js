import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import { useEffect } from 'react';
import Aos from 'aos';
import MainBlogPage from './pages/mainBlogPage';
import BlogPage from './pages/BlogPage';
import CategoriesPage from './pages/CategoriesPage';
import {Route_Path}  from './RoutePath/routepath';
import NotFound from './pages/NotFound';


function App() {
  useEffect(()=>{
    Aos.init()
  })
  return (
   <>
   <Routes>
    <Route path={Route_Path.HOME} element={<Layout/>}>
      <Route index element={<Home/>}/>
      {/* other page route code write here... */}
      <Route path={Route_Path.BLOG} element={<MainBlogPage/>}>
        <Route path={Route_Path.MYTHOLOGY} element={<CategoriesPage/>}/>
        <Route path={Route_Path.TECHNOLOGY}  element={<CategoriesPage/>}/>
        <Route path={Route_Path.ANIMALS} element={<CategoriesPage/>}/>
        <Route path={Route_Path.WEIRD} element={<CategoriesPage/>}/>
        <Route path={Route_Path.ENTERTAINMENT} element={<CategoriesPage/>}/>
        <Route path={Route_Path.HISTORY} element={<CategoriesPage/>}/>
      <Route path={`${Route_Path.B1}/:id`} element={<BlogPage/>}/>
      </Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
