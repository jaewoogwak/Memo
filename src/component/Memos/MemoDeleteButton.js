import React from "react";
import { useRef } from 'react';
import styled from "styled-components";
// import {} from '@/component'
const MemoDeleteButton = (props) => {

    const { handleDeleteMemo } = props;
    return (
        <button onClick={handleDeleteMemo}>X</button>
    )
}

export default MemoDeleteButton;