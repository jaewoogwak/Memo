import React from "react";
import MemoDeleteButton from "./MemoDeleteButton";
import { useEffect, useRef } from 'react';

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
        <div class="memo">
            <div class="text" ref={deleteMemo}>
                {console.log('memo : ', text)}
                {text}
            </div>
            <MemoDeleteButton
                handleDeleteMemo={handleDeleteMemo}
            />
        </div>

    );
}

export default Memo;