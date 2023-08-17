import styled from "styled-components";

export const Container = styled.div` 
position: relative;
`
export const Login = styled.div` 
width: 100%;
height: 100vh;
background-color:#171945;
position: relative;
`
export const Content = styled.div` 
position: absolute;
top: 220px;
left: 600px;
`
Content.Title = styled.h5` 
color: #FFFF;
padding-bottom:10px;
padding-left:5px;    
`
Content.Text = styled.h6` 
color: #FFF;
padding:15px 0 10px 0;
padding-left:5px;
`
export const Form = styled.input` 
width: 300px;
height: 45px;
border-radius: 10px;
border: 1px solid #BDC7CC;
outline: none;
background:none;
padding-left:15px;
color:#FFF;
:focus{
    border-color: #007FE2;
}
`
export const Btns = styled.button` 
width: 300px;
height: 45px;
border-radius:10px; 
margin-top:25px;
border: 0;
background-color:#25EFDC;
color: #212526;
cursor: pointer;
font-weight:600;
:hover{
    background-color:#26CFFC;
    transition:0.2s;
}
:active{
    background-color:#124B64;
}
`
export const Inpu = styled.div` 
`
export const Load = styled.div` 
background-color:#171945;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`