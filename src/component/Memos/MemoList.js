import React from "react";
import Memo from "./Memo.js";
import './memoStyle.css';
import { useState } from "react";

const MemoList = (props) => {
    
    const { memoList, setList, date } = props;
    let keyCount = 0;    
    
    return (
        <div>
            {memoList.map(memo => {
                if(memo.date === date)
                return <Memo memoList ={memoList} setList ={setList} key ={keyCount++} text = {memo.text} date ={memo.date}/>
            })}
        </div>
        
    )
}

export default MemoList;