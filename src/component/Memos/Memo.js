import React from "react";
import MemoDeleteButton from "./MemoDeleteButton";
import { useRef } from 'react';
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
    const { memoList, setList, text, date } = props;
    console.log('memolist: ', memoList)
    const deleteMemo = useRef();
    console.log('text, date : ', text, date)

    const handleDeleteMemo = (e) => {
        console.log('delMemo2', e.target);
        console.log('useRef=>memo: ', deleteMemo.current.innerText)
        const delMemo = deleteMemo.current.innerText;
        console.log('delMemo', delMemo)
        const newMemoList = memoList.filter(memo => {
            return memo.text != delMemo
        })
        console.log('newMemoList', newMemoList)
        setList(newMemoList);
    }

    return (
        <MemoWrapper>
            <MemoText ref={deleteMemo}>
                {console.log('memo : ', text)}
                {text}
            </MemoText>
            <MemoDeleteButton handleDeleteMemo = {handleDeleteMemo}/>
        </MemoWrapper>

    );
}

export default Memo;