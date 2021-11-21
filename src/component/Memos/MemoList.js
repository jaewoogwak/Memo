import React from "react";
import Memo from "./Memo.js";
import './memoStyle.css';
import { useState } from "react";

const MemoList = (props) => {
    
    const { memoList, handleDeleteMemo, setList } = props;
    let keyCount = 0;    
    


    return (
        <div>
            {/* {memoList} */}
            {memoList.map(memo => {
                return <Memo handleDeleteMemo ={handleDeleteMemo} memoList ={memoList} key ={keyCount++} text = {memo} setList ={setList}/>
            } )}

        </div>
        
    )
}

export default MemoList;