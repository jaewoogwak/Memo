import React from "react";
import { useRef } from 'react';

const MemoDeleteButton = (props) => {

    const { handleDeleteMemo2, memoList } = props;

    // const { onClick : addMemo } = props;
    return (

        <button className="del" onClick={handleDeleteMemo2}>X</button>

    )

}

export default MemoDeleteButton;