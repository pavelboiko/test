import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPopUp } from '../../actions/selectAll'
import { showPopup } from '../../actions/showPopup';

import Checkbox from '../Checkbox';
import Button from '../Button';
import Popups from '../Popups';

import styles from './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.selectPopup = this.selectPopup.bind(this);
  }

  selectPopup(selectedPopup) {
    const { selectPopUp } = this.props;
    selectPopUp(selectedPopup);
  }

  render() {
    const {
      showPopups,
      noPlanets,
      items,
      all,
      active,
      showPopup
    } = this.props;

    return (
      <div className={styles.mainWrap}>
        {noPlanets &&
          <div className={styles.overlay}>
            <span className={styles.hint}>
              Do fetch before start
              <span role="img" aria-label="hand"> 👉🏼</span>
            </span>
          </div>
        }
        <h1 className={styles.title}>Choose Popup</h1>
        <div className={styles.row}>
          <Checkbox />
        </div>
        <div className={styles.row}>
          {!all && <ul className={styles.selectPopup}>
            {items.map(({ name, id }) =>
              <li
                key={`${id}`}
                className={(id === active) ? styles.selected : ''}
                onClick={() => this.selectPopup(id)}
              >
                {name}
              </li>
            )}
          </ul>}
        </div>
        <div className={styles.row}>
          <Button onClick={(all || active) && showPopup} text="Open popup" />
        </div>
        <div className={styles.row}>
          {showPopups && <Popups />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Settings, Main, Popups }) => ({
  noPlanets: !Settings.items.length,
  items: Settings.items.slice(0, Settings.visiblePopups),
  all: Main.checked,
  active: Main.active,
  showPopups: Popups.show
});

export default connect(mapStateToProps, {
  selectPopUp,
  showPopup
})(Main);
