import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {getQueriesForElement} from '@testing-library/dom';
import App from './App';

// writing our own render method
// explaning how the render method works

function render(component){
  const root = document.createElement('div');
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
}

test('ToDo', () => {  
  const {getByText,getByLabelText} = render(<App/>);

  // look for text on the page
  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');  
});
