import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

test('ToDo', () => {  

  // How to test?
  // - first we need to render a component to the DOM
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);

  // After rendering component, 
  // use DOM APIs (query selector) to make assertions
  expect(root.querySelector('h1').textContent).toBe('TODO');
  expect(root.querySelector('label').textContent).toBe('Add todo: ');
  expect(root.querySelector('button').textContent).toBe('Add #1');

  // we are rendering a react app in the dom
  // we are making assertions
  // we are still going through the browser APIS
  // lets try other libraries
  // uses Jest 
});
