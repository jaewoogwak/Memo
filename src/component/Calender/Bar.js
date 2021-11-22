import React from "react";
import './calenderTab.css';
import NextBtn from './right.png';
import previousBtn from './left.png';

import { useState, useEffect } from 'react'


const Bar = (props) => {
    // 날짜 조작
    const { pageNext, pagePrevious, getDate } = props;
    const [presentDay, setPresentDay] = useState({
        year: 0,
        momth: 0,
        day: 0
    })
    const [today, setToday] = useState(`${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`) // 처음 랜더링

    const setDay = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        // setPresentDay({year : year, month : month, day : day});
        setPresentDay((prevState) => {
            return { ...prevState, year: year, momth: month, day: day }
        })
        setToday(`${year}년 ${month}월 ${day}일`)
        console.log('gettoday', today)
        console.log('presentDay', presentDay)
        return [year, month, day];
    }

    const getToday = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        getDate(`${year}${month}${day}`);
        return [year, month, day];

    }

    const nextDay = () => {
        const yy = Number(presentDay.year) //getToday()[0];
        const mm = Number(presentDay.momth) //Number(getToday()[1]);
        const dd = Number(presentDay.day) //Number(getToday()[2]);
        console.log('yymmdd', yy, mm, dd);
        // getDate(`${yy}${mm}${dd}`);
        // console.log(`${yy}-${mm}-${dd+1}`)   
        // const date = new Date(yy, mm, dd);
        const now = new Date(yy, mm - 1, dd);
        console.log('now', now);
        var tomorrow = new Date(now.setDate(now.getDate() + 1));	// 내일
        console.log("내일 : ", tomorrow);

        const year = tomorrow.getFullYear();
        const month = tomorrow.getMonth() + 1;
        const day = tomorrow.getDate();
        // const year = yesterday.getFullYear();
        // const month = ("0" + (1 + yesterday.getMonth())).slice(-2);
        // const day = ("0" + (yesterday.getDate())).slice(-2);
        console.log('year,month,day', year, month, day)
        getDate(`${year}${month}${day}`);

        // const yymmdd = [year, month, day];
        setToday(`${year}년 ${month}월 ${day}일`)
        setPresentDay((prevState) => {
            return { ...prevState, year: year, momth: month, day: day }
        });
        // console.log(presentDay);
        // console.log(yymmdd);
    }

    const previousDay = () => {
        const yy = Number(presentDay.year) //getToday()[0];
        const mm = Number(presentDay.momth) //Number(getToday()[1]);
        const dd = Number(presentDay.day) //Number(getToday()[2]);
        console.log('yymmdd', yy, mm, dd);
        // getDate(`${yy}${mm}${dd}`);
        // console.log(`${yy}-${mm}-${dd+1}`)   
        // const date = new Date(yy, mm, dd);
        const now = new Date(yy, mm - 1, dd);
        console.log('now', now);
        var yesterday = new Date(now.setDate(now.getDate() - 1));	// 내일
        console.log("내일 : ", yesterday);

        const year = yesterday.getFullYear();
        const month = yesterday.getMonth() + 1;
        const day = yesterday.getDate();
        // const year = yesterday.getFullYear();
        // const month = ("0" + (1 + yesterday.getMonth())).slice(-2);
        // const day = ("0" + (yesterday.getDate())).slice(-2);
        console.log('year,month,day', year, month, day)
        getDate(`${year}${month}${day}`);
        // const yymmdd = [year, month, day];
        setToday(`${year}년 ${month}월 ${day}일`)
        setPresentDay((prevState) => {
            return { ...prevState, year: year, momth: month, day: day }
        });
        // console.log(presentDay);
        // console.log(yymmdd);
    }

    const moveNext = () => {
        console.log("next");
        pageNext();
        nextDay();
    }

    const movePrevious = () => {
        console.log("previous");
        pagePrevious();
        previousDay();
    }

    useEffect(() => {
        setDay();
        // parseToday(today);
        console.log('today', today)
        getDate(today);
    }, [])

    return (
        <div class="calender-bar">
            {console.log('rendering')}
            <div class="present">
                {/* {presentDay.day} */}
                {today}
            </div>
            <div class="content-date">
                {/* <button  onClick={movePrevious} class="ico_arrow button" type="button">클릭</button> */}
                <div onClick={movePrevious} class="button previous">
                    <img src={previousBtn} alt="어제" />
                </div>
                <div class="day yesterday">
                    {Number(presentDay.day) - 1}
                </div>
                <div class="day today">
                    {presentDay.day}
                </div>
                <div class="day tomorrow">
                    {Number(presentDay.day) + 1}

                </div>
                <div onClick={moveNext} class="button next">
                    <img src={NextBtn} alt="내일" />
                </div>
            </div>
        </div>
    )

}

export default Bar;