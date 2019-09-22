// Libs
import React, { Component } from 'react';
import UUID from 'uuid/v4';
// Uitls

// Components
import { AppContext } from '../contexts/Context';

// Component

const initialState = {
  gameData: {}
};

class AppProvider extends Component {
  state = {
    ...initialState,
    initGame: this._initGame.bind(this),
    setInitialGameData: this._setInitialGameData.bind(this)
  };

  _setInitialGameData(uid) {
    const initialGameDate = localStorage.getItem(`game:${uid}`);

    this.setState({ gameData: initialGameDate });
  }

  _initGame(history) {
    const uid = UUID();
    history.push(`/game/${uid}`);
    localStorage.setItem(`game:${uid}`, JSON.stringify({ uid }));
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
