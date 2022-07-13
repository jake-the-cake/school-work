const App = () => {
  const handler = () => alert('hello');
  return <button onClick={handler}>Click Me</button>;
};

//Destructure an object

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
