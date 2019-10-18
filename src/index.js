import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/configureStore';
import ErrorPage from './views/errorPage';
import TheaterOfTheMind from './views/inGame/TotM';


const store = configureStore();

const greatestAppContainer = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" render={() => <div>the main page :D</div>} />
          <Route exact path="/play" render={() => <TheaterOfTheMind />} />
          <Route render={() => <ErrorPage />} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
);



ReactDOM.render(greatestAppContainer, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();