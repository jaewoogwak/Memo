import './App.css';
import './style.css'
import { useState } from 'react';
import MemoList from './component/Memos/MemoList';
import Dialog from './component/Memos/FormDialog';
import Bar from './component/Calender/Bar';

function App() {

  const [list, setList] = useState([]);


  const handleAddMemo = (text) => {
    console.log("addMemo");
    setList(list.concat([text]))
    console.log('list', list)

  }

  return (
    <div class="content">
      <div class="nav-date">
        <Bar/>
        {/* <Nav /> */}
      </div>
      <div class="list">
        <MemoList memoList={list} />
      </div>
      <div>
        <Dialog onClick={handleAddMemo} />

      </div>

    </div>
  );
}

export default App;
