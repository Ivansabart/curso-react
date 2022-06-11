import React from 'react';
import {createRoot} from 'react-dom/client';
import CounterApp from './CounterApp';


import './index.css'


const divRoot = document.getElementById('root');
const root = createRoot(divRoot);

root.render( <CounterApp value = {10} /> );


