import React from 'react'
import { Container, Content, Nav, Select, Form, Search, Menyu, Box, Navigat, Num, Menu, Icon, Filter, Meseg, Meseeg, Messege, Email, Profil, Name, Admin, Context, Log, Out, Admen, Pake } from './style'
import search from '../../assets/img/search (2).png'
import cal from '../../assets/img/cal.png'
import menu from '../../assets/img/menu.png'
import meseg from '../../assets/img/mesege.png'
import email from '../../assets/img/email.jpg'
import strel from '../../assets/img/strel.png'
import log from '../../assets/img/log.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {
  return (
    <Nav>
      <Container>
        <Content>
          <Select>
            <option>All Categories</option>
            <option>Teacher</option>
            <option>Doctor</option>
          </Select>
          <Form placeholder='Search Anything... ' />
          <Search src={search} />
        </Content>
        <Menyu>
          <Box>
            <Navigat src={cal} />
            <Num>3</Num>
          </Box>
          <Menu>
            <Icon src={menu} />
            <Filter>5</Filter>
          </Menu>
          <Meseg>
            <Meseeg src={meseg} />
            <Messege>8</Messege>
          </Meseg>
          <Profil>
            <Email src={email} />
            <Name>
              <Name.Title>XISLATBEK</Name.Title>
              <Context>
                <Context.Text>Admin</Context.Text>
                <Context.Strel  src={strel} />
              </Context>
            </Name>
          </Profil>
          <Link to='/'><Log><Out src={log} /></Log></Link>
        </Menyu>
      </Container>
    </Nav>
  )
}
