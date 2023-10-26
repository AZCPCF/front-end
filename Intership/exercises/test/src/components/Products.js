import StyledCM from './StyledCM'
const Products = () => {
    const { ParentDiv, P, Img } = StyledCM
    let Products = []
    let titles = ["Mobile", "Laptop"]
    let CompanyNames = ["Sony", "Apple", "SAMSUNG", "XIAOMI", "Razer", "Asus"]
    for (let i = 1; i <= 20; i++) {
        let title = Math.round(Math.random())
        let CompanyName = Math.floor(Math.random() * CompanyNames.length)
        Products = [...Products, { id: i, title: titles[title], content: CompanyNames[CompanyName] }]
    }
    Products = Products.map((item) => {
        let ML = item.title === "Mobile" ? 'red' : 'blue';
        return (
            <ParentDiv key={item.id} style={{ borderColor: `${ML}` , boxShadow : `0px 0px 25px 0px ${ML}` }}>
                <P>{item.title}</P>
                <Img src={require(`./${item.title === "Mobile" ? 'Mobile.jpg' : 'Laptop.jpg'}`)} />
                <P>{item.content}</P>
            </ParentDiv>
        )
    })
    return Products
}
export default Products
// 