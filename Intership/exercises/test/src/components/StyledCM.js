import styled from 'styled-components'
export const Form = styled.form`
width: 400px;
height: 250px;
box-shadow: 0px 0px 50px 0px black;
background-color: black;
margin: 10% auto;
display: flex;
justify-content: center;
border-radius:8px;
align-items: center;
flex-direction: column;
`
export const Inputs = styled.div`
width: 200px;
display: flex;
padding : 0px 50px;
justify-content: space-around;
`

export const Input = styled.input`
width:25px;
height:50px;
box-shadow: 0px 0px 10px 0px red;
background-color : red;
border : unset;
border-radius:4px;
line-height:50px;
font-size : 24px;
text-align : center;
`
export const Button = styled.button`
width: 200px;
height: 40px;
border: 2px solid red;
background-color: unset;
`