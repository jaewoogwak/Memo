import './App.css';
import { useState, useRef, useEffect } from 'react';
import MemoList from './component/Memos/MemoList';
import FormDialog from './component/Memos/FormDialog';
import Bar from './component/Calender/Bar';
import styled from 'styled-components';


const ContentWrapper = styled.div`
    margin: 0 auto;
    border: solid 2.5px #e2eff9;
    width: 500px;
    height: 100vh;


    // @media (max-width : 768px) {
    //   margin: 0 auto;
    //   width: 100%;
    //   height: 100vh;
    // }
  `;

const CalenderBar = styled.div`
    margin: 0 auto;
    // border: solid 2.5px #e2eff9;
    // border : solid 2.5px red;
    height: 10vh;
    // @media (max-width : 768px) {
    //   margin: 0 auto;

    //   width: 100vh;
    //   height: 8vh;
    // }
  `;

const Content = styled.div`
    margin: 0 auto;
    // border: solid 2.5px blue;
    height: 80vh
    text-align: center;
    // @media (max-width : 768px) {
    //   width: 100vh;
    //   margin:0 auto;

    //   height: 82vh;
  
    // }
  `

function App() {
  const [list, setList] = useState([
  ]);
  const [date, setDate] = useState('');
  const nextId = useRef(1);
  const handleAddMemo = (text, date) => {
    const memo = {
      id : nextId.current,
      text : text,
      date : date
    }
    setList([...list, memo])
    nextId.current +=1;
    console.log('list', list)
  }

  const handleDeleteMemo2 = id => {
    setList(list.filter(user => user.id !== id));
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
        <Bar getDate={getDate} />
      </CalenderBar>
      <Content>
        <MemoList memoList={list} setList={setList} date={date} onRemoveMemo ={handleDeleteMemo2} />
      </Content>
      <FormDialog onAddMemo ={handleAddMemo} date={date} />
    </ContentWrapper>

  );
}

export default App;
