import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './companets/Footer'
import Header from './companets/header'
import Teacher from './companets/teacher' 
import Error from './companets/error'
import Add from './companets/add'
import Edit from './companets/edit'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Footer/>}/>
      <Route path='/header' element={<Header/>}>
        <Route path='/header/teacher' element={<Teacher/>}/>
        <Route path='/header/add' element={<Add/>}/>
        <Route path='/header/teacher/edit/:id' element={<Edit/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}
