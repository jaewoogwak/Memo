import React from "react";
import { useRef } from 'react';

const MemoDeleteButton = (props) => {

    const { handleDeleteMemo, memoList } = props;

    // const { onClick : addMemo } = props;
    return (

        <button className="del" onClick={handleDeleteMemo}>X</button>

    )

}

export default MemoDeleteButton;