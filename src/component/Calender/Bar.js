import React from "react";
import './calenderTab.css';
import NextBtn from './right.png';
import previousBtn from './left.png';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const CalenderContents = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #b5d8f0;
`

const Present = styled.div`
    margin: 0 auto;
    text-align: center;
    padding-top: 12px;
    font-size: 32px;
    font-family:"BaeMin";
    color: rgb(57, 172, 218);
`

const SwitchDate = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 1%;

`
const Yesterday = styled.div`
    margin:5px;
    border-radius: 100%;
    width: 38px;
    height: 38px;
    background-color: #cce4f5;
    margin:10px;
    text-align: center;
    font-size: 16px;
    font-family:"BaeMin";
    color:#606e79;
    padding-top: 10px;
`

const Today = styled.div`
    margin:5px;
    border-radius: 100%;
    width: 46px;
    height: 46px;
    background-color:#cdd1f5;
    text-align: center;
    font-family:"BaeMin";
    font-size: 30px;
    color: #0516cd;
    padding-top: 7px;
`

const Tomorrow = styled.div`
    margin:5px;
    border-radius: 100%;
    width: 38px;
    height: 38px;
    background-color: #cce4f5;
    margin:10px;
    text-align: center;
    font-size: 16px;
    font-family:"BaeMin";
    color:#606e79;
    padding-top: 10px;


`

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
    
        const now = new Date(yy, mm - 1, dd);
        console.log('now', now);
        var tomorrow = new Date(now.setDate(now.getDate() + 1));	// 내일
        console.log("내일 : ", tomorrow);

        const year = tomorrow.getFullYear();
        const month = tomorrow.getMonth() + 1;
        const day = tomorrow.getDate();
        console.log('year,month,day', year, month, day)
        getDate(`${year}${month}${day}`);

        setToday(`${year}년 ${month}월 ${day}일`)
        setPresentDay((prevState) => {
            return { ...prevState, year: year, momth: month, day: day }
        });
      }

    const previousDay = () => {
        const yy = Number(presentDay.year) //getToday()[0];
        const mm = Number(presentDay.momth) //Number(getToday()[1]);
        const dd = Number(presentDay.day) //Number(getToday()[2]);
        console.log('yymmdd', yy, mm, dd);
        const now = new Date(yy, mm - 1, dd);
        console.log('now', now);
        var yesterday = new Date(now.setDate(now.getDate() - 1));	// 내일
        console.log("내일 : ", yesterday);

        const year = yesterday.getFullYear();
        const month = yesterday.getMonth() + 1;
        const day = yesterday.getDate();
        console.log('year,month,day', year, month, day)
        getDate(`${year}${month}${day}`);

        setToday(`${year}년 ${month}월 ${day}일`)
        setPresentDay((prevState) => {
            return { ...prevState, year: year, momth: month, day: day }
        });
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
        console.log('today', today)
        getDate(today);
    }, [])

    return (
        <CalenderContents>
            {console.log('rendering')}
            <Present>
                {today}
            </Present>
            <SwitchDate>
                <div onClick={movePrevious} class="button previous">
                    <img src={previousBtn} alt="어제" />
                </div>
                <Yesterday>
                    {Number(presentDay.day) - 1}
                </Yesterday>
                <Today>
                    {presentDay.day}
                </Today>
                <Tomorrow>
                    {Number(presentDay.day) + 1}
                </Tomorrow>
                <div onClick={moveNext} class="button next">
                    <img src={NextBtn} alt="내일" />
                </div>
            </SwitchDate>
        </CalenderContents>
        
    )


}

export default Bar;