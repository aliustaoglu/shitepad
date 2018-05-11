import '../assets/css/App.css';
import React, { Component } from 'react';
import { Input } from 'antd';

function enableTab(id) {
  const el = document.getElementById(id);
  el.onkeydown = function(e) {
    if (e.keyCode === 9) {
      const val = this.value,
        start = this.selectionStart,
        end = this.selectionEnd;

      this.value = val.substring(0, start) + '\t' + val.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
      return false;
    }
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    };
  }

  updateDimensions() {
    this.setState({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
    enableTab('metin');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div>
        <textarea
          id="metin"
          style={{
            height: this.state.innerHeight - 6,
            width: this.state.innerWidth
          }}
        />
      </div>
    );
  }
}

export default App;
