import React, { Component } from 'react';
import { toTop as scrollToPageTop } from '../../utils/scroll';

import './ScrollTop.css';

class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowScrollTopArrow: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    const boundingRect = ((document || {}).documentElement || {}).getBoundingClientRect;
    
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100) {
        this.setState({ shouldShowScrollTopArrow: true });
      } else {
        this.setState({ shouldShowScrollTopArrow: false });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const hideArrowClass = this.state.shouldShowScrollTopArrow ? '' : 'hide';

    return(
      <div className="scroll-top" onClick={(e) => scrollToPageTop()}>
        <div
          className={`arrow ${hideArrowClass}`}
        >
          <button className="fas fa-angle-double-up fa-2x" href="#" />
          <div className="to-top">To Top</div>
        </div>
      </div>
    );
  }
}

export default ScrollToTop;