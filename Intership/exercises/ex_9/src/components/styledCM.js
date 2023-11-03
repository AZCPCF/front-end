import styled from "styled-components"
export const HeaderDiv = styled.div`
    width:100%;
    height:150px;
    background-color:rgb(0,0,100);
    display:flex;
    flex-direction: column;
    justify-content:left;
    user-select: none;
    z-index:1;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`
export const Link = styled.div`
    width:100px;
    height:25px;
    line-height:25px;
    margin:25px;
    color: rgb(100,0,255);
    text-align:center;
    border:2px solid rgb(100,0,255);
    border-radius:4px;
`
export const ModalDiv = styled.div`
position: fixed;
z-index: 1;
padding-top: 100px;
left: 0;
top: 0;
width: 90%;
height: 300px;
opacity:1;
overflow: auto;
margin:15% 5%;
text-align:center;
background-color:rgb(100,0,255);
box-shadow:0px 0px 20000px 2000px rgba(0,0,0,.7);
border-radius:12px;
position:fixed;

`
export const Form = styled.form`
display:flex;
justify-content: space:between;
flex-direction:column;
margin-top:-50px;
`
export const Input = styled.input`
width:200px;
background-color:rgb(0,0,100);
color:white;
box-shadow:0px 0px 25px 0px rgb(0,0,100);
border:1px solid black;
border-radius:2px;
padding-left:10px;
height:30px;
margin:0 auto;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const Text = styled.div`
width:350px;
margin:0 auto;
color:white;
word-wrap: break-word;
text-align:center;
margin-top:-60px;
`
export const Button = styled.button`
width:200px;
background-color:rgb(0,0,100);
color:white;
box-shadow:0px 0px 25px 0px rgb(0,0,100);
border:1px solid black;
border-radius:2px;
height:30px;
margin:0 auto;
margin-top:30px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const Close = styled.button`
background-color:unset;
font-size:48px;
position:relative;
margin-top:-1000px;
border:unset;
margin-left:1250px;
bottom:60px;
`