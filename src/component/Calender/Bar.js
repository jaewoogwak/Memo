import React from "react";
import './calenderTab.css';
import NextBtn from './nextBtn.jpg';
import previousBtn from './previousBtn.jpg';

const Bar = () => {

    const moveNext = () => {
        console.log("next");
    }

    const movePrevious = () => {
        console.log("previous");
    }

    return (
        <div class="calender-bar">
            <div class="present">
                2021년 11월 21일
                

            </div>
            <div class="content-date">
                <div onClick ={movePrevious} class="button previous">
                    <img src={previousBtn} alt="어제" />
                </div>
                <div class="day yesterday">

                </div>
                <div class="day today">

                </div>
                <div class="day tomorrow">

                </div>
                <div onClick ={moveNext} class="button next">
                    <img src={NextBtn} alt="내일" />
                </div>
            </div>


        </div>
    )

}

export default Bar;