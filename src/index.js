import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div>Ohayo <strong>Arsalan!!</strong><br />hi<br />
  {5 + 20}
  </div>
}

function greet(name) {
  return "Hi " + name + "!";
}
ReactDOM.render(<Hi/>, document.querySelector('#root'));