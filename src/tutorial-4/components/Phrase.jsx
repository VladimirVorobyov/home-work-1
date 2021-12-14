import React from 'react';
import '../App.css';


export const Phrase = ({words}) => {
  return (
    <div className="list">
      {words.map((word)=><div key={word.id} className="block"><h3>{word.text}</h3></div>)}
</div>
  )
}
