import React from 'react';
import { render } from 'react-dom';
import LibModule from '../lib';
import './styles.css';

const DemoApp = () => <LibModule hello="world" />;

render(<DemoApp />, document.getElementById('app'));
