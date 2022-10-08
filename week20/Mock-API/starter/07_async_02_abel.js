// App.js
// ---------------------------------------------
import React from 'react';
import './App.css';
import { api } from "./api";

function App(){
  const [items,setItems] = React.useState([]);
  const [value,setValue] = React.useState([]);  

  function handleSubmit(e){
    e.preventDefault();

    api.createItem(value).then((persistedItem) => {
      setItems([...items,persistedItem]);
      setValue('');  
    });    
  }

  return (
    <div>
      <h1>TODO</h1>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Add todo: </label>
        <input
          id="new-todo"
          value={value}
          placeholder="Add Todo..."          
          onChange={e => setValue(e.target.value)}
        />
        <button>
          Add #{items.length + 1}
        </button>
      </form>
    </div>
  );
}

function TodoList(props){
  return (
    <ul>
      {props.items.map((item,i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default App;

// App.test.js
// ---------------------------------------------
import React from 'react';
import { render,fireEvent, wait } from '@testing-library/react';
import App from './App';
import { api } from "./api";

// you are supposed to be able to mock the
// entire module using jest.mock('./api);
// I could not get the right syntax
const mockCreateItem = (api.createItem = jest.fn());

test('renders', async () => {
  const todoText = "Learn spanish";
  mockCreateItem.mockResolvedValueOnce(todoText);
  const { getByText, getByLabelText } = render(<App />);

  // enter content, interact with page
  const input = getByLabelText('Add todo:');
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add #1'));

  await wait(() => getByText('wash car'));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining('wash car')
  );  


});


// api.js
// ---------------------------------------------
// Simulating api
export const api = {
    createItem: (newItem) => {
      return Promise.resolve(newItem);
    }
};
