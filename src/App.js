import './App.css';
import { useState, useRef, useEffect } from 'react';
import MemoList from './component/Memos/MemoList';
import Dialog from './component/Memos/FormDialog';
import Bar from './component/Calender/Bar';
import Responsive from './responsive';
import { MOBILE } from './responsive';
import styled from 'styled-components';


const ContentWrapper = styled.div`
    margin: 0 auto;
    border: solid 2.5px #e2eff9;
    width: 500px;
    height: 664px;
  `;

const CalenderBar = styled.div`
    margin: 0 auto;
    border: solid 2.5px #e2eff9;
    height: 60px;
  `;

const Content = styled.div`
    width: 100%;
    height: 80%;
    text-align: center;
  `


function App() {



  const [list, setList] = useState([{ 'text': '', 'date': '' }]);
  const [date, setDate] = useState('');

  const delMemo = useRef();

  const handleAddMemo = (text, date) => {
    console.log("addMemo");
    setList(list.concat([{ 'text': text, 'date': date }]))
    console.log('list', list)

  }

  const pageNext = () => {
    console.log('page next')
  }

  const pagePrevious = () => {
    console.log('page previous')
  }

  const getDate = (date) => {
    console.log('getDate -> setDate', date);
    setDate(date);
  }
  { document.title = "Memo app" }

  return (
    <ContentWrapper>
      {console.log('app render')}
      <CalenderBar>
        <Bar pageNext={pageNext} pagePrevious={pagePrevious} getDate={getDate} />
      </CalenderBar>
      <Content>
        <MemoList memoList={list} setList={setList} date={date} />
      </Content>
      <Dialog onClick={handleAddMemo} date={date} />
    </ContentWrapper>

  );
}

export default App;
