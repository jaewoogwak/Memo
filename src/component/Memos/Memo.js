import React from "react";
import MemoDeleteButton from "./MemoDeleteButton";

const Memo = (props) => {
    return (
        <div class="memo">
            <div class="text">
                {console.log('memo : ', props)}
                    {props.text}
            </div>
            <MemoDeleteButton/>
        </div>

    );
}

export default Memo;