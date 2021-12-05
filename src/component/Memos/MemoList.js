import React from "react";
import Memo from "./Memo.js";

const MemoList = (props) => {
    const { memoList, date , onRemoveMemo} = props;
    
    return (
        <div>
            {memoList.filter(memo => memo.date === date).map(memo => <Memo memo = {memo} key={memo.id} text={memo.text} date={memo.date} onRemoveMemo = {onRemoveMemo} />)}
        </div>
    )
}

export default MemoList;