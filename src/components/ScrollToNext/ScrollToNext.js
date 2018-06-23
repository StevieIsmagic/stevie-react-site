import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './ScrollToNext.css';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector} = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div 
        className="scroll-to-next" 
        onClick={(e) => this.scrollToNext()}
      >
        <div className="arrow bounce">
          <div className="scroll-text">Click Me</div>
          <button className="fas fa-chevron-down fa-2x" href="#" title="arrow button to scroll downward"/>
        </div>
      </div>
    )
  }
}

export default ScrollToNext;