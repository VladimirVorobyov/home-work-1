import React from 'react';
import '../App.css';


export const Phrase = ({words}) => {
  return (
    <div className="list">
      {words.map((word,index)=><div key={index} className="block"><h3>{word}</h3></div>)}
</div>
  )
}
