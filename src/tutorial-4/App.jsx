import { nanoid } from 'nanoid';
import React from 'react';
import './App.css';
import { EmptyBlock } from './components/EmptyBlock';
import { Phrase } from './components/Phrase';
import {adjectivesArr,nounsArr} from './const-word';

export const App = () => {
  const [route,setRoute]= React.useState('empty');
  const [words, setWords] = React.useState([]);
  const getGenerate = ()=>{
    setRoute('phrase');
    setWords((prev)=>[...prev,{id:nanoid(),
      text:
      `${adjectivesArr[Math.floor(Math.random()*adjectivesArr.length)]} 
       ${adjectivesArr[Math.floor(Math.random()*adjectivesArr.length)]}
       ${nounsArr[Math.floor(Math.random()*nounsArr.length)]}
      `}])
  }
  const clearList = ()=> {
    setRoute('empty');
    setWords([]);
  }
  return (
   <div className="wrapper">
     {route === 'phrase' && <Phrase words={words} />}
     {route === 'empty' && <EmptyBlock/>}
    <button onClick={getGenerate} className="btn btn_generate">Сгенерировать</button>
    <button onClick={clearList} className="btn btn_clear">Очистить</button>
  </div>
  )
}
