import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Contact from './components/contact/Contact'
import About from './components/about/About'

import HomeLayout from './components/home/HomeLayout'
import Github from './components/home/homeMain/Github'
import LeetCode from './components/home/homeMain/LeetCode'
import Projects from './components/home/homeMain/Projects'
import Skills from './components/home/homeMain/Skills'
import Overview from './components/home/homeMain/Overview'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout />}>

          
          <Route path='' element={<HomeLayout />} >
              <Route index element={<Overview />} /> 
              <Route path='/home/""' element={<Overview/>} />
              <Route path='/home/overview' element={<Overview/>} />
              <Route path='/home/github"' element={<Github/>} />
              <Route path='/home/leetcode' element={<LeetCode/>} />
              <Route path='/home/projects' element={<Projects/>} />
              <Route path='/home/skills' element={<Skills/>} />

          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
         


      </Route>


    )

  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
