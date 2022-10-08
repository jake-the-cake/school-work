import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
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

  const input = getByLabelText('Add todo:');
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add #1'));

  getByText('wash car');
  getByText('Add #2');
});

// userEvent expresses intent better
test("user-events allows users to add...", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText('Add todo:');
  const button = getByText("Add #1");

  userEvent.type(input, "Learn spanish");
  userEvent.click(button);

  getByText("Learn spanish");
  getByText("Add #2");
});