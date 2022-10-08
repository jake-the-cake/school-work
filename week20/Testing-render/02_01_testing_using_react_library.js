import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {getQueriesForElement} from '@testing-library/dom';
import App from './App';

// using the testing-library/dom we can express tests better
// express test how users would for content
// users look for content not tags/elements
// encourages testers to think like users

test('ToDo', () => {  
  // render app component to the DOM
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);
  const {getByText,getByLabelText} = getQueriesForElement(root);

  // look for text on the page
  expect(getByText('TODO')).not.toBeNull();
  expect(getByLabelText('Add todo:')).not.toBeNull();
  expect(getByText('Add #1')).not.toBeNull();  
});
