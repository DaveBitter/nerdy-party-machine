// Libs
import React, { Component } from 'react';

// Uitls

// Components
import { AppContext } from '../contexts/Context';

// Component

const initialState = {
};

class AppProvider extends Component {
  state = {
    ...initialState,
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
