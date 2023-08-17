import React from 'react'
import { Border, Container, Content, Icon, Menu, Menyu } from './style'
import menu from '../../assets/img/icon.png'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import play from '../../assets/img/play.png'
import './style.css'

export default function Saidbar() {
    const [open, setOpen] = useState(true)
    const toggle = () => setOpen(!open)
    return (
        <Container style={{ width: open ? "19%" : "50px"}}>
            <Content>
                <Menu onClick={toggle} src={menu} />
                <Container.Title style={{display: open? "block" : "none"}} >S31 Admin Panel</Container.Title>
            </Content>
            <Border />
            <NavLink to='/header/teacher' className='man'>
                <Icon src={play} />
                <Menyu style={{ display: open ? "block" : "none" }}>Teacher</Menyu>
            </NavLink>
        </Container>
    )
}
