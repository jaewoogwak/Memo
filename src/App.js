import './App.css';
import './style.css'
import { useState } from 'react';
import View from './component/View';
import Nav from './component/Nav';
import MemoList from './component/MemoList';
import MemoAddButton from './component/MemoAddButton';
import Dialog from './component/FormDialog';
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
