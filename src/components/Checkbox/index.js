import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSelectAll } from '../../actions/selectAll';

import styles from './styles.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.check = this.check.bind(this);
  }

  check() {
    const { toggleSelectAll } = this.props;
    toggleSelectAll();
  }

  render() {
    const { checked } = this.props;
    return (
      <div onClick={this.check} className={`${styles.box} ${checked ? styles.checked : ''}`}>
        <div className={styles.arrow}></div>
        <span className={styles.label}>Select all popups</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  checked: state.Main.checked
})

export default connect(mapStateToProps, {
  toggleSelectAll
})(Checkbox);
