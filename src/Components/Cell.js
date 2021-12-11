import React from "react";
import styled from "styled-components";

const CellBody = styled.div`
    height: 100%;
    width: 50%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CellHolder = styled.div`
    height: 200px;
    width: 200px;
    display: flex;  
`;

const LinesHolder = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Cell = ({p, pprim, x, xprim, index}) => {
    return (
        <CellHolder>
            <LinesHolder>
                <div>
                    <hr></hr>
                    {p !== '' ? p : null}
                </div>
                <div>
                    {x ? x : null}
                    <hr></hr>
                </div>
            </LinesHolder>
            <CellBody>
                {`P${index}`}
            </CellBody>
            <LinesHolder>
                <div>
                    <hr></hr>
                    {pprim ? pprim : null}
                </div>
                <div>
                    {xprim ? xprim : null}
                    <hr></hr>
                </div>
            </LinesHolder>
        </CellHolder>
    )
};

export default Cell;