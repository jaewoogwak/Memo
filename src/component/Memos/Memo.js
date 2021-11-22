import React from "react";
import MemoDeleteButton from "./MemoDeleteButton";
import { useEffect, useRef } from 'react';

const Memo = (props) => {

    const { memoList, text, setList, date } = props;
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

    const getToday = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return [year, month, day];
    }

    
    return (
        <div class="memo">
            <div class ="creationTime">
                {date}

            </div>
            <div class="text" ref={deleteMemo}>
                {console.log('memo : ', text)}
                {text}
            </div>
            <MemoDeleteButton
                handleDeleteMemo={handleDeleteMemo}
                memoList={memoList}
            />
        </div>

    );
}

export default Memo;