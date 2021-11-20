import React from "react";
import Memo from "./Memo.js";
import './memoStyle.css';
import { useState } from "react";

const MemoList = (props) => {
    
    const { memoList } = props;
    let keyCount = 0;    
    


    return (
        <div>
            {/* {memoList} */}
            {memoList.map(memo => {
                return <Memo key ={keyCount++}text = {memo}/>
            } )}

        </div>
        
    )
}

export default MemoList;