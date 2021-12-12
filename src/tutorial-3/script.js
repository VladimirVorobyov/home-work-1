const input = document.querySelector('input');
const add = document.querySelector('#add');
const ul = document.querySelector('ul')
let valueTask;

input.addEventListener('change',(e)=> valueTask = e.target.value);

add.addEventListener('click',()=>{
  if(input.value === '') return;
  let li = document.createElement('li');
  let closeBtn = document.createElement('button');
  li.textContent = valueTask;
  closeBtn.textContent = 'X';
  li.appendChild(closeBtn);
  closeBtn.addEventListener('click',()=>{
    ul.removeChild(li)
  })
  ul.appendChild(li);
  valueTask = '';
  input.value= '';
})
