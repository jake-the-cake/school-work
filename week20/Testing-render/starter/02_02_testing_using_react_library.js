import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {getQueriesForElement} from '@testing-library/dom';
import App from './App';

test('ToDo', () => {  
  // render app component to the DOM
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);
  const {getByText,getByLabelText} = getQueriesForElement(root);

  // look for text on the page
  // --- cleaner, test still fails without assertion ---
  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');  
});
