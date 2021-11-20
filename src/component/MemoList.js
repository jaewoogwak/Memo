import React from "react";
import Memo from "./Memo";
import '../style.css';
import { useState } from "react";

const MemoList = (props) => {
    
    const { memoList } = props;
    let keyCount = 0;    
    


    return (
        <div>
            메모 리스트
            {/* {memoList} */}
            {memoList.map(memo => {
                return <Memo key ={keyCount++}text = {memo}/>
            } )}

        </div>
        
    )
}

export default MemoList;