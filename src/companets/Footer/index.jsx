import React, { useEffect, useState } from 'react'
import { Btns, Container, Content, Form, Inpu, Load, Login } from './style'
import { PulseLoader } from 'react-spinners'
import { NavLink, Link, useNavigate } from 'react-router-dom'


export default function Footer() {
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
        user: "",
        password: "",
    })
    const Logan = () => {
        if (data.user === 'xislatbek' && data.password === '20051114') {
            navigate('/header/teacher')
            console.log('test')
        }
        else {
            alert('Login yoki Parol Xato!')
        }
    }

    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1500)
    }, [])
    return (
        <Container>
            {
                load ?
                    <Load><PulseLoader
                        color={"#FFF"}
                    /></Load>
                    :
                    <Login>
                        <Content>
                            <Content.Title>Введите данные чтобы войти в систему</Content.Title>
                            <form onSubmit={Logan}>
                                <Inpu>
                                    <Content.Text>Имя пользователя</Content.Text>
                                    <Form value={data.user} onChange={(e) => setData({ ...data, user: e.target.value })} tabindex="1" type="text" placeholder='Имя пользователя'></Form>
                                </Inpu>
                                <Inpu>
                                    <Content.Text>Пароль</Content.Text>
                                    <Form value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} tabindex="2" type="password" placeholder='Пароль'></Form>
                                </Inpu>
                                <Btns type='submit'>Войти</Btns>
                            </form>
                        </Content>
                    </Login>
            }
        </Container>

    )
}
