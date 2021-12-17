import React from 'react';
import { Reviews } from './components/ Reviews';
import {Form} from './components/Form'
import './App.scss'

const getLocalItems = () => {
  let list = localStorage.getItem('comments');
  if(list) {
    return JSON.parse(localStorage.getItem('comments'));
  } else {
    return [];
  }
}

export const App = () => {
  const listImg = ['/angry.png','/sleeping.png','/smile.png','/puke.png'];
  const getRandome = (list)=>{
    return list[Math.floor(Math.random()*list.length)];
  }
  const [comments, setComments] = React.useState(getLocalItems());

const addTask = (name,text,email) => {
  setComments((prev)=>[...prev, {
    fullName: name,
    email: email,
    createdAt: new Date(),
    text: text,
    img:getRandome(listImg),
  }])
}

const deleteTask = (el) => {
  setComments(comments.filter((item)=> item.createdAt !== el));
}

React.useEffect(()=>{
  localStorage.setItem('comments', JSON.stringify(comments))
},[comments])
  return (<div>
     <Reviews list={comments} deleteTask={deleteTask}/>
     <Form addTask = {addTask}/>
    </div>
  )
}
