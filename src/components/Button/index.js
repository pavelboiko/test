import React, { Component } from 'react';

import styles from './styles.css';

export default class Button extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <button className={styles.buttonFetch} onClick={onClick}>{text}</button>
    )
  }
}
