import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar'
import { Nav } from '../navbar/style'
import { Container } from './style'

export default function Main() {
  return (
    <Container>
      <Navbar/>
      <Outlet/>
    </Container>
  )
}
