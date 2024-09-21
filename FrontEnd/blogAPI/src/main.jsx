import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { SignUp } from './components/Register.jsx'
import { SignIn } from './components/Login.jsx'
import { Logout } from './components/LogOut.jsx'
import { IndividualPost } from './components/IndividualPost.jsx'
import { Search } from './components/Search.jsx'
import { Admin } from './Admin.jsx'
import { Edit } from './components/crud/Edit.jsx'
import { Create } from './components/crud/Create.jsx'
import { Delete } from './components/crud/Delete.jsx'

import './index.css'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <div className='flex-grow'>
                 <Routes>
            <Route element={<App></App>} path="/"></Route>
            <Route element={<Admin></Admin>} path='/admin'></Route>
            <Route element={<Create></Create>} path='/admin/create'></Route>
            <Route element={<Edit></Edit>} path='/admin/edit/:id'></Route>
            <Route element={<Delete></Delete>} path='/admin/delete/:id'></Route>
        <Route element={<SignUp></SignUp>} path="/register"></Route>
        <Route element={<SignIn></SignIn>} path="/login"></Route>
        <Route element={<Logout></Logout>} path="/logout"></Route>
        <Route element={<IndividualPost></IndividualPost>} path="/posts/:slug"></Route>
        <Route path="/search" element={<Search></Search>} />
      </Routes>
        </div>
      <Footer />
      </div>
    </StrictMode>
  </BrowserRouter>
);
