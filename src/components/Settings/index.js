import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPlanets from '../../actions/fetchPlanets';

import Counter from '../Counter';
import Button from '../Button';

import styles from './styles.css';

class Settings extends Component {
  render() {
    const { fetchPlanets, items, loading, success, error } = this.props;
    return (
      <div className={styles.settingsWrap}>
        {loading && <div className={styles.loader}>
          <div className={styles.loaderCircle}></div>
        </div>}
        <h1 className={styles.title}>
          Settings
          {success && <span role="img" aria-label="ok">👌🏼</span>}
          {error && <span role="img" aria-label="err">👎🏼</span>}
        </h1>
        <div className={styles.row}>
          <span className={styles.label}>Count of planets:</span>
          <span className={styles.count}>{items.length}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Count of popups:</span>
          <Counter />
        </div>
        <div className={styles.row}>
          <Button onClick={fetchPlanets} text="fetch planets" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Settings }) => ({
  items: Settings.items,
  loading: Settings.loading,
  success: Settings.success,
  error: Settings.error,
});

export default connect(mapStateToProps, {
  fetchPlanets
})(Settings);
