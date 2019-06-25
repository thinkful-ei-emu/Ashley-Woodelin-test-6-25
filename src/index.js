import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './List.css';
import './Card.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import STORE from './store';

ReactDOM.render(<App lists={STORE.lists} allCards={STORE.allCards} />, document.getElementById('root'));
serviceWorker.unregister();
