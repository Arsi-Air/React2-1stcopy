import React from 'react';
import ReactDOM from 'react-dom';

function Hi(props) {
  return <div>Hello {props.name}!</div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));