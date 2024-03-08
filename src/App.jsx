import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Service from './service/Service';
import Contact from './contact/Contact';
import NavFoot from './navfoot/NavFoot';
import UserPost from './userpost/UserPost';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<NavFoot/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='userpost' element={<UserPost/>}/>
      </Route>
      </>
    )
  );


  return (
    <>
        <RouterProvider
          router={router}
        />
    </>
  )
}

export default App
