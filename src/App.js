import './App.css';
import './style.css'
import { useState, useRef, useEffect } from 'react';
import MemoList from './component/Memos/MemoList';
import Dialog from './component/Memos/FormDialog';
import Bar from './component/Calender/Bar';

function App() {

  const [list, setList] = useState([{'text' : '', 'date' : ''}]);
  const [page, setPage] = useState({
    date:'default',
    view: list
  });
  const [date, setDate] = useState('');

  const delMemo = useRef();
  
  const handleAddMemo = (text, date) => {
    console.log("addMemo");
    setList(list.concat([{'text' : text, 'date' : date}]))
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

  return (
    <div class="content">
      {console.log('app render')}
      <div class="nav-date">
        <Bar pageNext = {pageNext} pagePrevious ={pagePrevious} getDate = {getDate}/>
      </div>
      <div class="list">
        {/* <p>{date}</p> */}
        <div>
          {/* {page.view} */}
          <MemoList memoList={list} setList = {setList} date ={date}/>
        </div>
      </div>
      <div>
        <Dialog onClick={handleAddMemo} date ={date} />

      </div>

    </div>
  );
}

export default App;
