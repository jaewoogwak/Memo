import './App.css';
import { useState } from 'react';
import View from './View';
import Nav from './Nav';
import MemoList from './MemoList';
import MemoAddButton from './MemoAddButton';
import Dialog from './FormDialog';

function App() {

  const [list, setList] = useState([]);


  const handleAddMemo = (text) => {
    console.log("addMemo");
    setList(list.concat([text]))    
    console.log('list', list)

  }

  return (
    <div>
      <div>
        <Nav />
        <Dialog onClick={handleAddMemo} />
        {/* <MemoAddButton onClick={handleAddMemo} /> */}
      </div>
      <div>
        <MemoList memoList ={list}/>
      </div>
    </div>
  );
}

export default App;
