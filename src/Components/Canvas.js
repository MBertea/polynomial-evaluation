import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const coeffs = [1,2,1]

const PageHolder = styled.div`
    height: 100vh;
    width: 100vw;
    display flex;
    flex-direction: column;
    align-items: center;
    background-color: yellow;
    justify-content: space-evenly;
`;

const InOutHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const CellsHolder = styled.div`
    display: flex;
    flex-direction: row;
    
`;

const Canvas = () => {

    const [input, setInput] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [output, setOutput] = useState([]);
    const [valObjects, setValObjects] = useState([])

    useEffect(() => {
        const emptyVals = [];
        coeffs.forEach((element, index) => {emptyVals.push({p: '', pprim: '', x: '', xprim: '', index: index})});
        setValObjects(emptyVals);
    }, []);

    const handleClickAdvance = () => {
        let valObjCpy = [...valObjects];
        for (let i = valObjects.length-2; i >= 0; i--) {
            if (valObjCpy[i].p === '') {
                valObjCpy[i+1].p = '';
                valObjCpy[i+1].x = '';
                valObjCpy[i+1].xprim = '';
                valObjCpy[i+1].pprim = '';
                continue;
            }

            valObjCpy[i+1].x = valObjCpy[i].x;
            valObjCpy[i+1].xprim = valObjCpy[i].xprim;
            valObjCpy[i+1].p = valObjCpy[i].pprim;
            valObjCpy[i+1].pprim = valObjCpy[i].x === '' ? '' : valObjCpy[i].pprim * valObjCpy[i].x + coeffs[i+1];
        }
        if (valObjects[valObjects.length - 1].pprim !== '') {
            setOutput([...output, valObjects[valObjects.length - 1].pprim]);
        }
        if (input.length !== 0) {
            let newX = input[input.length-1];
            valObjCpy[0].x = newX;
            valObjCpy[0].xprim = newX;
            valObjCpy[0].p = 0;
            valObjCpy[0].pprim = coeffs[0];
            let inpCpy = [...input];
            inpCpy.pop();
            setInput(inpCpy);
        } else {
            valObjCpy[0].x = '';
            valObjCpy[0].xprim = '';
            valObjCpy[0].p = '';
            valObjCpy[0].pprim = '';
        }

        setValObjects(valObjCpy);
    };

    return (
        <PageHolder>
            <InOutHolder>
                <div>
                    <h5>Inputs</h5>
                    <br></br>
                    {input}
                </div>
                <div>
                    <h5>Output</h5>
                    <br></br>
                    {output.map(element => element + ", ")}
                </div>
            </InOutHolder>
            <CellsHolder>
                {valObjects.map(element => 
                    <Cell
                        p={element.p}
                        pprim={element.pprim}
                        x={element.x}
                        xprim={element.xprim}
                        index={element.index}
                    />
                )}
            </CellsHolder>
            <button onClick={handleClickAdvance}>Advance</button>
        </PageHolder>
    );
};

export default Canvas;