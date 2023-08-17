import styled from "styled-components";

export const Container = styled.div` 
width: 19%;
background: #302595;
height: 100vh;
`
export const Menu = styled.img` 
width: 30px;
height: 30px;
margin-left:7px;
cursor: pointer;
:hover{
    background-color: #2A66E2;
    border-radius:8px;
    transition:0.5s;
}
:active{
    background-color:#3AFFEC;
    transition:0.2s;
}
`
Container.Title = styled.h4` 
font-size:20px;
color: #FFFF;
/* padding-top:10px; */
`
export const Content = styled.div` 
display: flex;
align-items: center;
gap: 15px;
padding-top:18px;
padding-bottom:20px;
`
export const Border = styled.div`
border: 1.6px solid #616168;
margin-bottom:20px;
`
export const Menyu = styled.div` 
display: flex;
align-items: center;
color: #EBEAF2;
font-size:15px;
font-weight:750;

`
export const Icon = styled.img` 
width: 20px;
height: 20px;
margin-left:12px;
`

