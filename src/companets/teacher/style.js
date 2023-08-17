import styled from "styled-components";

export const Container = styled.div` 
overflow:auto ;
height: calc(100vh - 70px);
position: relative;
::-webkit-scrollbar{
    width: 8px;
}
::-webkit-scrollbar-thumb{
    background-color:#379ADC    ;
    border-radius:10px;
}
`
export const Content = styled.div` 
position: absolute;
left: 550px;
top: 200px;
font-weight:700;
font-size: 20px;
`
export const Tablen = styled.div` 
margin:30px;
`
export const Card = styled.div` 
width: 95.4%;
height: 60px;
box-shadow:0 0 10 #ccc;
background-color:#FFF;
margin:40px 0 0 30px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;

`
export const Home = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
export const Trans = styled.h4` 

`
export const Filte = styled.input`
height: 35px;
border: 0;
outline: none;
padding-left:10px;
width: 130px;
border-radius: 8px;
`
export const Btns = styled.button` 
width: 190px;
height: 35px;
border-radius: 15px;
font-size:15px;
font-weight:650;
border: 0;
box-shadow:0 0 10px #B6DEF8;
background-color:#B9DDF5;
cursor: pointer;
:hover{
    background-color:#60B8F2;
    color: #FFFF;
    transition: 0.2s;
}
:active{
    background: none;
    color: black;
    border: 1px solid #60B8F2;
}
`
export const Form = styled.div` 
display: flex;
align-items: center;
border: 2px solid;
border-radius: 8px  ;
:hover{
    box-shadow:0 0 10px #4131D0;
    transition: 0.5s;
}

`
export const Search = styled.img` 
width: 35px;
height: 35px;
background: #302595;
border-top-right-radius:5px;
border-bottom-right-radius:5px;
`
export const Delet = styled.img` 
width: 40px;
height: 40px;
cursor: pointer;
:hover{
    background-color:#DF282C;
    border-radius:50%;
    transition:0.8s;
}
:active{
    background-color:#CA6CFF;
    transition:0.2s;
}
`
export const Loding = styled.div` 
width: 100%;
height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
`
export const Edit = styled.img` 
width: 30px;
height: 30px;
cursor: pointer;
:hover{
    background-color:#44E140;
    border-radius:50%;
    transition:0.5s;
}
:active{
    background-color:#DCF227;
}
`