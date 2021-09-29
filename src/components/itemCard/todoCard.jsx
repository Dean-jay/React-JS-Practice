import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import './todoCard.css';

class TodoCard extends Component {
  render() {
    return (
      <section className='box--itemCard'>
        <div className='container--img'>
          <img src='/img/default.PNG' alt='defaultImg' className='todo--img' />
        </div>
        <div className='container--txt'>
          <ItemList />
        </div>
      </section>
    );
  }
}

export default TodoCard;
