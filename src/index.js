// install react snippets in vscode
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const el = document.getElementById('app');

render(<App url="https://github.com/rodrigofuentes/react-webpack" />, el);
