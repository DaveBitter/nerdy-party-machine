// Libs
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Store
import AppProvider from './static/js/utils/providers/AppProvider';

// Pages
import Home from './pages/Home/Home';

// Styles
import './styles/all.scss';

// Component
const App = () =>
  <Router>
    <AppProvider>
      <Route path='/' exact component={Home} />
    </AppProvider>
  </Router>;

export default App;
