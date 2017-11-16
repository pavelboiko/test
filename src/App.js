import React, { Component } from 'react';

import Main from './components/Main';
import Settings from './components/Settings';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <Main />
        <Settings />
      </div>
    );
  }
}

export default App
