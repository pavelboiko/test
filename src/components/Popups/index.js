import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closePopup } from '../../actions/showPopup';

import Button from '../Button';

import styles from './styles.css';

class Popups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popups: [],
      active: 0
    }

    this.next = this.next.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    const { count, activePopup, all, popups } = this.props;
    this.setState({
      popups: all
        ? popups.slice(0, count)
        : popups.filter(({ id }) => id === activePopup)
    });
  }

  close() {
    const { closePopup } = this.props;
    this.setState({ closing: true });
    setTimeout(() => {
      this.setState({ closing: false }, () => {
        closePopup();
      });
    }, 500)
  }

  next() {
    const { active } = this.state;
    this.setState({ changing: true });
    setTimeout(() => {
      this.setState({
        changing: false,
        active: active + 1
      })
    }, 400);
  }

  render() {
    const { active, popups, closing, changing } = this.state;

    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      surface_water,
      population,
      terrain
    } = popups[active];

    return (
      <div className={`${styles.popup} ${closing && styles.closing} ${changing && styles.changing}`}>
        <div className={styles.row}>
          <h1 className={styles.title}>{name}</h1>
        </div>
        <div className={`${styles.row} ${styles.spaceBetween}`}>
          <ul className={styles.col}>
            <li>Rotation period: <span>{rotation_period}</span></li>
            <li>Orbital period: <span>{orbital_period}</span></li>
            <li>Diameter: <span>{diameter}</span></li>
            <li>Climate: <span>{climate}</span></li>
          </ul>
          <ul className={styles.col}>
            <li>Gravity: <span>{gravity}</span></li>
            <li>Surface water: <span>{surface_water}</span></li>
            <li>Population: <span>{population}</span></li>
            <li>Terrain: <span>{terrain}</span></li>
          </ul>
        </div>
        <div className={`${styles.row} ${styles.button}`}>
          {(active === popups.length - 1)
            ? <Button text="Close" onClick={this.close} />
            : <Button text="Next" onClick={this.next} />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Settings, Main }) => ({
  count: Settings.visiblePopups,
  activePopup: Main.active,
  all: Main.checked,
  popups: Settings.items
});

export default connect(mapStateToProps, {
  closePopup
})(Popups);
