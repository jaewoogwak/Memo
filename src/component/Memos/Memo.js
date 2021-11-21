import React from "react";
import MemoDeleteButton from "./MemoDeleteButton";
import { useRef } from 'react';

const Memo = (props) => {

    const { handleDeleteMemo, memoList, text, setList } = props;
    console.log('memolist: ', memoList)
    const deleteMemo = useRef();

    const handleDeleteMemo2 = (e) => {
        console.log('delMemo2', e.target);
        console.log('useRef=>memo: ', deleteMemo.current.innerText)
        const delMemo = deleteMemo.current.innerText;
        const newMemoList = memoList.filter(memo => {
            return memo != delMemo
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
                handleDeleteMemo2={handleDeleteMemo2}
                memoList={memoList}
            />
        </div>

    );
}

export default Memo;