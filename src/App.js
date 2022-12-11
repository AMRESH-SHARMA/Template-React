import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Topics from './screens/Topics';
import DefaultLayout from './layout/DefaultLayout'
import Register from './screens/Register'
import Login from './screens/Login'
import ModalScr from './screens/ModalScr';

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />

          <Route path="/" name="defaultLayout" element={<DefaultLayout />} >
            <Route path='/home' element={<Home />} />
            <Route path='/topics' element={<Topics/>} />
            <Route path="/modal" element={<ModalScr />} />
          </Route>


        </Routes>
    </BrowserRouter>
  )
}
export default App
