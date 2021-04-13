import React, {useState} from 'react';
import List from './components/List';
import InputForm from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const  KEY = 'time';
    const getItemJson= (key) => JSON.parse(localStorage.getItem(key));
    const setItemJson= (key, arr) => localStorage.setItem(KEY, JSON.stringify(arr));
    const [timers, setTimers] = useState(getItemJson(KEY) || []);

  const createCountNote = (event)=>{
      event.preventDefault();
      let title = event.target.elements.title.value;
      if(title==='') return alert('Enter title');
      let date = event.target.elements.date.value;
      let number = event.target.elements.time.value;
      let param = '';
      if(number){
        param =`${date}T${number}`;
      } else param = date;
      let time = +new Date(param);
      let item =[...timers, {
        'title': title, 
        'date': date, 
        'number': number,
        'timeDown': time
      }];
      setItemJson(KEY, item);
      setTimers(getItemJson(KEY));
  }
  const deleteTimers =()=>{
      localStorage.removeItem(KEY)
      setTimers([]);
  }

  return (
    <div className="container">
      <InputForm createCountNote={createCountNote} delete={deleteTimers}/>
      <List timers={timers}/>
    </div>
  );
  }

export default App;
