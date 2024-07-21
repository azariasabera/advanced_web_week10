import './App.css';
import Container from './components/MyContainer';
import { useState } from 'react'; // this is a hook

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Test1 info={{
        name: 'John Doe',
        age: 30
      }} />
      <Test2 name="Jane Doe" age={25} />
    </div>
  );
}

function Test1(props) {
  return (
    <div>
      <h1>{props.info.name}</h1>
      <h2>{props.info.age}</h2>
    </div>
  );
}

function Test2(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
}

export default App;
