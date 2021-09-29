import React, { Component } from 'react';
import './mainCard.css';

class MainCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button className='js-button' onClick={this.handleClick}>
          Animate for UnderStand Grid
        </button>

        <div
          className={this.state.isToggleOn ? 'grid grid--full' : 'grid js-grid'}
        >
          <article className='item'>
            <h2>Element 1</h2>
          </article>
          <article className='item'>
            <h2>Element 2</h2>
          </article>
          <article className='item'>
            <h2>Element 3</h2>
          </article>
        </div>
      </>
    );
  }
}

export default MainCard;
