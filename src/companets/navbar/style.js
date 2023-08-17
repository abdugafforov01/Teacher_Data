import styled from "styled-components";

export const Nav = styled.div`
 height: 70px;
 width: 100%;
 background-color: #FFFF;
 padding: 0 20px;
 `
export const Container = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top:13px;
`
export const Content = styled.div` 
display: flex;
align-items: center;
border-radius:8px;
:hover{
    box-shadow:0 0 10px #4131D0;
    transition: 0.5s;
}

`
export const Select = styled.select` 
height: 40px;
border-top-left-radius:8px;
border-bottom-left-radius:8px;
outline: none;
border-right: none;
border-top:1.7px solid #282424;
border-bottom:1.7px solid #282424;
border-left:1.7px solid #282424;
cursor: pointer;
width: 150px;
padding-left:10px;
`
export const Form = styled.input` 
height: 40px;
width: 230px;
outline: none;
padding-left:15px;
border:1.7px solid #282424;
border-right:none;
`
export const Search = styled.img` 
width: 40px;
height: 40px;
background: #302595;
border-top-right-radius:8px;
border-bottom-right-radius:8px;
border-top:1.7px solid #282424;
border-right:1.7px solid #282424;
border-bottom:1.7px solid #282424;
cursor: pointer;
`
export const Menyu = styled.div` 
display: flex;
align-items: center;
gap: 25px;
`
export const Box = styled.div` 
width: 37px;
height: 35px;
box-shadow:0 0 10px #CCC;
position: relative;
border-radius: 5px;
cursor: pointer;
:active{
    background-color:#FFBD06;
    transition:0.2s;
}
`
export const Navigat = styled.img` 
width: 22px;
height: 22px;
margin-left:8px;
margin-top:6px;
`
export const Num = styled.div` 
width: 18px;
height: 18px;
border-radius: 50%;
background-color: #F87B28;
position: absolute;
bottom: 24px;
left: 25px;
text-align: center;
color: #FFFF;
font-size:12px;
font-weight:650;
padding-top:1px;
`
export const Icon = styled.img` 
width: 32px;
height: 32px;
margin-left:3px;
margin-top:3px;
`
export const Menu = styled.div` 
width: 37px;
height: 35px;
box-shadow:0 0 10px #CCC;
position: relative;
border-radius: 5px;
cursor: pointer;
:active{
    background-color:#5BE87C;
    transition:0.2s;
}
`
export const Filter = styled.div` 
width: 18px;
height: 18px;
border-radius: 50%;
background-color: #1FE14D;
position: absolute;
bottom: 24px;
left: 25px;
text-align: center;
color: #FFFF;
font-size:12px;
font-weight:650;
padding-top:1px;
`
export const Meseg = styled.div`
width: 37px;
height: 35px;
box-shadow:0 0 10px #CCC;
position: relative;
border-radius: 5px;
cursor: pointer;
:active{
    background-color:#5A5F5B;
    transition:0.2s;
}
`
export const Meseeg = styled.img` 
width: 22px;
height: 22px;
margin-left:8px;
margin-top:7px; 
`
export const Messege = styled.div` 
width: 18px;
height: 18px;
border-radius: 50%;
background-color: #1B1C1B;
position: absolute;
bottom: 24px;
left: 25px;
text-align: center;
color: #FFFF;
font-size:12px;
font-weight:650;
padding-top:1px;
`
export const Email = styled.img` 
width: 45px;
height:45px;
border-radius: 50%;
cursor: pointer;
`
export const Profil = styled.div` 
display: flex;
align-items: center;
gap: 10px;
`
export const Name = styled.div` 

`
Name.Title = styled.h5` 

`
export const Context = styled.div` 
display: flex;
align-items: center;
gap: 5px;
`
Context.Text = styled.h6` 

`
Context.Strel = styled.img` 
width: 10px;
height: 10px;
cursor: pointer;
`
export const Log = styled.button` 
width: 50px;
height: 30px;
border-radius: 12px;
border: 0;
background-color:#72F04E;
cursor: pointer;
:hover{
    background-color:#FF282D;
    transition:0.2s;
}
:active{
    background:none;
    border:1.5px solid #FF282D;
}
`
export const Out = styled.img` 
width: 22px;
height: 22px;
margin-top:3px;
margin-left:2px;
`

