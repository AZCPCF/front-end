import React, { useState } from 'react'
import Form from './components/Form'
import ProductGenerator from './components/ProductGenerator'
const App = () => {
    const [selectComponent, setSelectComponent] = useState(0)
    const ml = {marginLeft: '10px'}
    return (
        <>
            <button style={ml} onClick={() => setSelectComponent(1)} disabled={selectComponent === 1 ? true : false}>ex_1</button>
            <button style={ml} onClick={() => setSelectComponent(2)} disabled={selectComponent === 2 ? true : false}>ex_2</button>
            {selectComponent === 1 ? <Form /> : selectComponent === 2 ? <ProductGenerator /> : null}
        </>
    )
}

export default App