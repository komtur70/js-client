//var css = require('./app.scss');
import "bootstrap/scss/bootstrap.scss";
//import css from './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

var Schalter = React.createClass({
  test: function () {
    alert('Test2')
  },
  render: function() {
    return (
      <Button color="danger" onClick={this.test}>{this.props.label}</Button>
    );
  }
});

var Checkbox = React.createClass({

  getInitialState: function () {
    return {checked: true}
  },

  handleClick: function () {
    this.setState({checked: !this.state.checked})
  },

  render: function() {
    var msg;
    if(this.state.checked){
      msg = 'checked'
    }else{
      msg = 'unchecked'
    }
    return (
      <div>
        <input type="checkbox" onChange={this.handleClick} defaultChecked={this.state.checked}></input>
        <h3>Status ist: {msg}</h3>
      </div>
    );
  }
});

ReactDOM.render(
    <div>
      <Schalter label="Eins1"/>
      <Checkbox />
    </div>,
  document.getElementById('root')
);
