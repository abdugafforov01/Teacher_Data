import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Btns, Container, Content, Form, Info, Load } from './style'
import { PulseLoader } from 'react-spinners'

export default function Add() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        last_name: "",
        specialist: "",
        degree: "",
    })
    const getData = () => {
        if (data.name && data.last_name && data.specialist && data.degree)
        {
            axios.post('https://6427fbdc46fd35eb7c492488.mockapi.io/teacher', data, {
                headers: {
                    "Content-Type": "Application/json"
                }
            })
                .then(res => navigate('/header/teacher'))
                .catch(error => console.log(error))
        }

        else {
            alert('Malumot Kiriting')
        }
    }


    useEffect(() => {
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 1500)
    }, [])
    return (
        <Container>
            {
                open ?
                    <Load> <PulseLoader /></Load>
                    :
                    <Content>
                        <Content.Title>Create New Teacher</Content.Title>
                        {/* <form onSubmit={getData}> */}
                            <Info>
                                <Form value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder='Name' />
                            </Info>
                            <Info>
                                <Form value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })} placeholder='Last_Name' />
                            </Info>
                            <Info>
                                <Form value={data.specialist} onChange={(e) => setData({ ...data, specialist: e.target.value })} placeholder='Specialist' />
                            </Info>
                            <Info>
                                <Form value={data.degree} onChange={(e) => setData({ ...data, degree: e.target.value })} placeholder='Degree' />
                            </Info>
                            <Btns onClick={getData}>Add Teacher</Btns>
                        {/* </form> */}
                    </Content>
            }
        </Container>
    )
}
