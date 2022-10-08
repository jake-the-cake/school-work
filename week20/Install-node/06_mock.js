// App.js
// -----------------------------------------
import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";

export default function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

// MyComponent.js
// -----------------------------------------
import React from "react";

// simulating component
export default function MyComponent(){
    return (
        <div>this is my component</div>
    );
}

// App.test.js
// -----------------------------------------
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./MyComponent', () => () => (<div>Hello World</div>));

test('renders', () => {
  const { container } = render(<App/>);
  expect(container.textContent)
    .toMatch('Hello World');
});
