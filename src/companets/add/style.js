import styled from "styled-components";

export const Container = styled.div` 
height: calc(100vh - 70px);
width: 100%;
background-color:#CEF3FC;
`
export const Content = styled.div` 
text-align: center;
padding-top:140px;
`
Content.Title = styled.h3` 

`
export const Form = styled.input` 
height: 35px;
width: 280px;
margin-top:20px;
border-radius: 10px;
border: 1px solid #555B5C;
outline: none;
padding-left:10px;
:focus{
    border: 2px solid blue;
}
`
export const Info = styled.div` 
`
export const Btns = styled.button`
height: 35px;
width: 280px;
border-radius: 10px;
border: 0;
margin-top:20px;
background-color:#3EE72C;
cursor: pointer;
:hover{
    background-color:#17BA32 ;
    color: #FFFF;
    transition:0.2s;
}
:active{
    background: none;
    border: 2px solid #3EE72C;
    color: black;
}
`
export const Load = styled.div` 
width: 100%;
height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
`