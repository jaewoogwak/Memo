import React from "react";
import styled from 'styled-components'

const MemoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    text-align: center;
    background-color:#e2eff9;
    border: solid 1px rgb(184, 184, 190);
    border-radius: 20px;
    margin-top:10px;
    margin-bottom: 10px;
    padding:10px;
    width: 100%;
    font-size: 30px;
    color: #004170;
    font-family: "BaeMin";
    height: 60px;
`

const MemoText = styled.div`
    text-align: center;
    width: 100%;
    padding-left: 6%;
    padding-right:6%;
    padding-top: 4px;
`
const Memo = (props) => {
    const { memo, text, date, onRemoveMemo } = props;
    console.log('text, date : ', text, date)

    const remove = () => {
        onRemoveMemo(memo.id);
    }

    return (
        <MemoWrapper>
            <MemoText>
                {text}
            </MemoText>
            <button className = "deleteBtn" onClick={remove}>X</button>
        </MemoWrapper>

    );
}

export default Memo;