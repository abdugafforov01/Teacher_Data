import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Btns, Container, Content, Form, Info, Load } from './style'
import { PulseLoader } from 'react-spinners'
import { useLocation, useNavigate, } from 'react-router-dom'

export default function Edit() {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const id = location.pathname.split('/')
    const a = id[id.length - 1]
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:"",
        last_name:"",
        specialist:"",
        degree:"",
        id:null
    })
    useEffect(()=>{
        axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${a}`,{
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(res=>{
            setData({...data,id:Number(res.data.id),last_name:res.data.last_name,specialist:res.data.specialist,name:res.data.name,degree:res.data.degree})
        })
    },[])
    const editData = ()=>{
        axios.put(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${data.id}`,data,{
            headers:{
                "Content-Type0" : "application/json"
            }
        })
        .then(res=>{
            navigate('/header/teacher')
        })
        .catch(error=>console.log(error))
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
                        <Content.Title>Edit Teacher</Content.Title>
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
                            <Btns onClick={editData}>Save Teacher</Btns>
                    </Content>
            }
        </Container>
  )
}
