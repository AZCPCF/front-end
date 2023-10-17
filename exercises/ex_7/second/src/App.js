import Form from './components/Form'
const App = () => {
    const styles = {
        formMargin : '10% auto',
        width : '350px',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        formBorderRadius : '8px',
        boxShadow : '0px 0px 25px 0px blue',
        bg: "blue",
        color: "white",
        fSize: "20px",
        border : '2px solid black',
        borderRadius : "4px",
        margin : "10px",
        paddingTop : "20px",
        height : '25px'
    }
    return <Form {...styles}/>
}
export default App