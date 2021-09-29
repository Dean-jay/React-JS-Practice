import React, { Component } from 'react';
import './itemList.css';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      children: [
        { id: 1, name: 'Jay', start: '10:00', finish: '12:00' },
        { id: 2, name: 'Kang', start: '12:00', finish: '14:00' },
        { id: 3, name: 'Deuksun', start: '14:00', finish: '16:00' },
      ],
    };
  }
  // makeList() {
  //   const ul = document.querySelector('.container--todo-list');
  //   const a = `<li className='list--item'>
  // 	From <time>10:00</time> to <time>11:00</time> ::
  // 	<p>I made item now.</p>
  // </li>`;
  //   ul.appendChild(a);
  // }
  handleClick = (e) => {
    e.preventDefault();
    console.log('yes');
    console.log(e);
  };
  render() {
    const children = this.state.children.map((val) => {
      return (
        <li id={val.id} className='list--item'>
          <time>{val.start}</time>&nbsp;to&nbsp;<time>{val.finish}</time>
          &nbsp;::
          <p>I made item now. {val.name}</p>
        </li>
      );
    });
    return (
      <>
        <ul className='container--todo-list'>{children}</ul>
        <button className='btn btn--makelist' onClick={this.handleClick}>
          make
        </button>
      </>
    );
  }
}

export default ItemList;
