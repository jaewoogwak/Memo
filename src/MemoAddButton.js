import React from "react";

const MemoAddButton = (props) => {
    
    const { onClick : addMemo } = props;
    return (
        <span>
            <button onClick={addMemo}>+</button>

        </span>

    )

}

export default MemoAddButton;