import React from 'react';
import '../App.css';

export const EmptyBlock = () => {
  return (
  <div className="block empty-block">
    <div className='emoji'></div>
    <h2>Список фраз пустой</h2>
    <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
  </div>
  )
}
