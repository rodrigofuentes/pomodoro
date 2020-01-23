// install react snippets in vscode
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './styles/main.scss';

const el = document.getElementById('app');

render(<App />, el);
