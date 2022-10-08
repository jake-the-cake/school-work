import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from './App';

test('ToDo', () => {  
  const {getByText,getByLabelText} = render(<App/>);

  // look for text on the page
  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');  
});

test('add items to list', () => {
  const {getByText,getByLabelText} = render(<App/>);

  // enter content, interact with page
  const input = getByLabelText('Add todo:');
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add #1'));

  getByText('wash car');
  getByText('Add #2');
});