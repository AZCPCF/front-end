import Products from './Products'
import { Body, Grid, Button, GeneratorForm, Span } from './StyledCM'
import { useState } from 'react'
const ProductGenerator = () => {
    const [WhichBut, setWhichBut] = useState(0)
    return (
        <>
            <GeneratorForm>
                <Span>
                    {WhichBut === 2 ? 'Click Generate to Generate 20 random products' :
                        WhichBut === 1 ?
                            'Click Clear to delete products' :
                            'Click Generate to Generate 20 random products and Click Clear to delete products'
                    }
                </Span>
                <Button onClick={() => setWhichBut(1)} disabled={WhichBut === 1 ? true : false}>Generate</Button>
                <Button onClick={() => setWhichBut(2)} disabled={WhichBut === 0 ? true : WhichBut === 2 ? true : false}>Clear</Button>
            </GeneratorForm>
            {WhichBut === 1 ? <Body>
                <Grid>
                    <Products />
                </Grid>
            </Body> : null
            }

        </>
    )
}

export default ProductGenerator