import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo young'};
  }
  render() {
    return (
      <div className={styles.app}>
        bar
      </div>
    );
  }
}

