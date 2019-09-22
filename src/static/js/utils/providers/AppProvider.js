// Libs
import React, { Component } from 'react';
import UUID from 'uuid/v4';
// Uitls

// Components
import { AppContext } from '../contexts/Context';

// Component
const initialGameData = { choices: [] };

const initialState = {
  gameData: initialGameData
};

class AppProvider extends Component {
  state = {
    ...initialState,
    handleGameChoice: this._handleGameChoice.bind(this),
    initGame: this._initGame.bind(this),
    setInitialGameData: this._setInitialGameData.bind(this)
  };

  _handleGameChoice(choice) {
    const updatedGameData = { ...this.state.gameData, choices: [...this.state.gameData.choices, choice] };
    this.setState({ gameData: updatedGameData });

    localStorage.setItem(`game:${this.state.gameData.uid}`, JSON.stringify(updatedGameData));
  }

  _setInitialGameData(uid) {
    const gameData = localStorage.getItem(`game:${uid}`);

    this.setState({ gameData: { ...initialGameData, ...JSON.parse(gameData) } });
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
