import { useState } from 'react';
import * as Comp from './App.styles'

function App() {
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [metersPerBucket, setMetersPerBucket] = useState(3);
    const [result, setResult] = useState(0);

    function calculate() {
        let area = width * height;
        let buckets = Math.ceil(area / metersPerBucket);
        setResult(buckets);
    }

    return (
        <Comp.Container>
            <Comp.ContentArea>
                <Comp.Title>Calculadora de tinta</Comp.Title>

                {
                    result !== 0
                        ? <Comp.Description>
                            Você precisará de
                            <Comp.Highlight>{result} LATA{result > 1 ? 'S' : ''}</Comp.Highlight>
                            para pintar essa parede
                        </Comp.Description>

                        : <Comp.Description>
                            Insira as dimensões da parede que deseja pintar, e o rendimento da lata de tinta
                        </Comp.Description>
                }

                <Comp.FormArea>
                    Altura da parede em metros
                    <Comp.ValueInput
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        type="number"
                    />
                </Comp.FormArea>

                <Comp.FormArea>
                    Largura da parede em metros
                    <Comp.ValueInput
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        type="number"
                    />
                </Comp.FormArea>

                <Comp.FormArea>
                    Rendimento da lata em m²
                    <Comp.ValueInput
                        value={metersPerBucket}
                        onChange={(e) => setMetersPerBucket(Number(e.target.value))}
                        type="number"
                    />
                </Comp.FormArea>

                <Comp.CalcButton onClick={calculate}>
                    <Comp.Image src='paint-bucket.svg' />
                    Calcular
                </Comp.CalcButton>

            </Comp.ContentArea>
        </Comp.Container>
    )
}

export default App