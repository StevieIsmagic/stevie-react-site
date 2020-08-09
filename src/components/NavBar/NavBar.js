import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSticky: false
    };
  }

  scrollToPage(pageSelector){
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <nav>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e)=> this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e)=> this.scrollToPage('.instagram-page')}
          >
            Portfolio
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;