import React, { Component } from 'react';
import './itemCard.css';

class ItemCard extends Component {
  render() {
    return (
      <>
        <section className='box--itemCard'>
          <div className='stage'>
            <div className='box bounce-5'></div>
          </div>
        </section>
      </>
    );
  }
}

export default ItemCard;
