import PropTypes from 'prop-types';

import css from './Modal.module.css';
import { Component } from 'react';
export class Modal extends Component {
  handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onImageClick('');
    }
  };
  componentDidMount() {   
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {    
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onImageClick('');
    }
  };
  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.largeImgUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onImageClick: PropTypes.func,
};