import React from "react";
import './memoStyle.css';

const MemoDeleteButton = (props) => {
    const { handleDeleteMemo } = props;
    return (
        <button className = "deleteBtn" onClick={handleDeleteMemo}>X</button>
    )
}

export default MemoDeleteButton;