import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Head from './components/Head/Head';
import About from './components/About/About';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserPage from './components/Users/UserPage';
import ErrorPage from './components/Error/Error';

import userData from './data/user.json'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';

//

const Root = () =>{
  return(
    <div className='container'>
    <Header />
    <main className='main'>
    <Outlet />
    </main>
    <Footer />
  </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Head/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/:userId' loader={loader} element={<UserPage/>} errorElement={<ErrorPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
)

//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router = {router}/>
);

function loader({params}){
  const user = userData.filter(e => e.id === Number(params.userId))
  return user[0]
}

