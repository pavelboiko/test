import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../../actions/counter';

import styles from './styles.css';

class Counter extends Component {
  render() {
    const { increment, decrement, count } = this.props;
    return (
      <div className={styles.counter}>
        <span className={styles.arrow} onClick={decrement}>-</span>
        <span className={styles.count}>{count}</span>
        <span className={styles.arrow} onClick={increment}>+</span>
      </div>
    )
  }
}

const mapStateToProps = ({ Settings }) => ({
  count: Settings.visiblePopups
});

export default connect(mapStateToProps, {
  increment,
  decrement
})(Counter);
