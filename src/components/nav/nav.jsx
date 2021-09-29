import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='box--flex'>
        <div className='box--red'>
          <div className='box--orange'>
            <div className='box--yellow'>
              <div className='box--green'>
                <div className='box--blue'>
                  <div className='box--navy'>
                    <div className='box--purple'>Hello</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box--red'>
          <div className='box--orange'>
            <div className='box--yellow'>
              <div className='box--green'>
                <div className='box--blue'>
                  <div className='box--navy'>
                    <div className='box--purple'>World</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box--red'>
          <div className='box--orange'>
            <div className='box--yellow'>
              <div className='box--green'>
                <div className='box--blue'>
                  <div className='box--navy'>
                    <div className='box--purple'>I'm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box--red'>
          <div className='box--orange'>
            <div className='box--yellow'>
              <div className='box--green'>
                <div className='box--blue'>
                  <div className='box--navy'>
                    <div className='box--purple'>Jay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
