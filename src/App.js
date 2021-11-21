import './App.css';
import './style.css'
import { useState, useRef } from 'react';
import MemoList from './component/Memos/MemoList';
import Dialog from './component/Memos/FormDialog';
import Bar from './component/Calender/Bar';

function App() {

  const [list, setList] = useState([]);
  const delMemo = useRef();
  
  const handleAddMemo = (text) => {
    console.log("addMemo");
    setList(list.concat([text]))
    console.log('list', list)

  }

  const handleDeleteMemo = (e) => {
    console.log('delMemo', e.target.parentNode);
    // setList(list.filter(() => {

    // }))

  }

  return (
    <div class="content">
      <div class="nav-date">
        <Bar/>
        {/* <Nav /> */}
      </div>
      <div class="list">
        <MemoList memoList={list} handleDeleteMemo ={handleDeleteMemo} setList = {setList} />
      </div>
      <div>
        <Dialog onClick={handleAddMemo} />

      </div>

    </div>
  );
}

export default App;
