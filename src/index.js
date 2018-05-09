import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../ant.less';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );
document.title = "Notepad"

// Now we can render our application into it
render( <App />, document.getElementById('root') );