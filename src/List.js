import React from 'react';
import Todo from './Todo';

const List = ({ items, name }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <Todo key={item.id} id={item.id} name={item.name} complete={item.complete} /> )}
    </ul>
  </div>
);
export default List; 