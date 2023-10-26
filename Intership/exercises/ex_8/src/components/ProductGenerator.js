import { Body, Grid, Button, GeneratorForm, Span, P, Img, ParentDiv } from './StyledCM'
import { useState } from 'react'
const ProductGenerator = () => {

    const [WhichBut, setWhichBut] = useState(0)
    const [whenClicked, setWhenClicked] = useState([])
    const [clickedTime, setClickedTime] = useState(0)
    const Products = (p) => {
        let products = []
        let titles = ["Mobile", "Laptop"]
        let CompanyNames = ["Sony", "Apple", "SAMSUNG", "XIAOMI", "Razer", "Asus"]
        for (let i = 1; i <= Math.floor(p) * 20; i++) {
            let title = Math.round(Math.random())
            let CompanyName = Math.floor(Math.random() * CompanyNames.length)
            products = [...products, { id: i, title: titles[title], content: CompanyNames[CompanyName] }]
        }
        return products
    }
    return (
        <>
            <GeneratorForm>
                <Span>
                    {WhichBut === 2 ? 'Click Generate to Generate 20 random products' :
                        WhichBut === 1 ?
                            'Click Clear to delete products' :
                            'Click Generate to Generate 20 random products and Click Clear to delete products'}
                </Span>
                <Button onClick={() => {
                    setClickedTime(clickedTime +  1)
                    setWhenClicked([...whenClicked, ...Products(clickedTime)])
                    setWhichBut(1)
                }}>Generate</Button>
                <Button onClick={() => {
                    setWhenClicked([])
                    setClickedTime(0)
                    setWhichBut(2)
                }} disabled={WhichBut === 0 ? true : WhichBut === 2 ? true : false}>Clear</Button>
            </GeneratorForm>
            {WhichBut === 1 ? <Body>
                <Grid>
                    {
                        whenClicked.map((item) => {
                            const ML = item.title === 'Mobile' ? 'red' : 'blue'
                            return (
                                <ParentDiv key={Math.random()} style={{ borderColor: `${ML}`, boxShadow: `0px 0px 25px 0px ${ML}` }}>
                                    <P>{item.title}</P>
                                    <Img src={require(`./${item.title === "Mobile" ? 'Mobile.jpg' : 'Laptop.jpg'}`)} />
                                    <P>{item.content}</P>
                                </ParentDiv>
                            )
                        })
                    }
                </Grid>
            </Body> : null
            }

        </>
    )
}

export default ProductGenerator
