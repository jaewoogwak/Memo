import React from "react";

const Memo = (props) => {
    return (
        <div class ="memo">
            {console.log('memo : ', props)}
            {props.text}
        </div>
    );
}

export default Memo;