import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Main from '../main'
import Saidbar from '../saidbar'
import { Container, Content } from './style'
import { PulseLoader } from 'react-spinners'


export default function Header() {
  // const [load, setLoad] = useState(false)
  // useEffect(() => {
  //   setLoad(true)
  //   setTimeout(() => {
  //     setLoad(false)
  //   }, 1500)
  // }, [])
  return (
    <>
      {/* {
        load ?
          <Content>
            <PulseLoader 
            color={'#0f0e0e'} />
          </Content>
          :
          <Container>
            <Saidbar />
            <Main />
          </Container>
      } */}
      <Container>
            <Saidbar />
            <Main />
          </Container>
    </>

  )
}
