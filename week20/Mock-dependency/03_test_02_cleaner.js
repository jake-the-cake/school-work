import * as React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('ToDo', () => {  
  const {getByText,getByLabelText} = render(<App/>);

  // look for text on the page
  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');  
});
