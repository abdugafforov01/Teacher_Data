import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Btns, Card, Container, Form, Content, Filte, Home, Search, Tablen, Trans, Delet, Dalete, Loding, Edit } from './style'
import './style.css'
import search from '../../assets/img/search (2).png'
import delet from '../../assets/img/delete.png'
import { Link, useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
import edit from '../../assets/img/edit.png'


export default function Teacher() {
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  const [data, setData] = useState([])
  const [dep, setDep] = useState(false)
  const [records, setRecords] = useState([])
  const removeTeacher = (id) => {
    axios.delete(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${id}`, {
      headers: {
        "Content-Type": "Application/json"
      }
    }).then(res => setDep(!dep))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    axios.get('https://6427fbdc46fd35eb7c492488.mockapi.io/teacher', {
      headers: {
        "Content-Type": "Application/json"
      }
    })
      .then(res => { 
        setData(res.data)
        setRecords(res.data)
       })
      .catch(error => console.log(error))
  }, [dep])
  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 1500)
  }, [])
  const Filter = (event) => {
    setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }
  return (
    <Container>
      {
        load ?
          <Loding><PulseLoader /></Loding>
          :
          <> <Card>
            <Home>
              <Trans>Transcations</Trans>
              <Form>
                <Filte type="text" placeholder='Search' onChange={Filter} />
                <Search src={search} />
              </Form>
            </Home>
            <Link to='/header/add'><Btns>+ Add New Patient</Btns></Link>
          </Card>
            <Tablen>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last_Name</th>
                    <th>Specialist</th>
                    <th>Degree</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.length ?
                      records.map(item => {
                        return (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.specialist}</td>

                            <td>{item.degree}</td>
                            <td><Edit src={edit} onClick={() => navigate(`/header/teacher/edit/${item.id}`)} /></td>
                            <td><Delet src={delet} onClick={() => removeTeacher(item.id)} /></td>
                          </tr>
                        )
                      })
                      :
                      <Content>"Malumot Yoq"</Content>
                  }
                </tbody>
              </table>
            </Tablen>
          </>

      }
    </Container>
  )
}
