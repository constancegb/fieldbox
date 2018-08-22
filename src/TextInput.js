import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'enabled',
      inputValue: 'I can write!',
      inputState: '',
      inputVisible: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleInputChange(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  }

  handleSelectChange(e) {
    const selectValue = e.target.value;
    this.setState({ selectValue });

    if (selectValue === 'hidden') {
      this.setState({ inputVisible: selectValue });
    } else if (selectValue === 'enabled') {
      this.setState({ inputState: '', inputVisible: selectValue, inputValue: 'I can write!' });
    } else {
      this.setState({ inputState: selectValue, inputVisible: selectValue, inputValue: "I can't write!" });
    }
  }

  render() {
    return (
      <div className="text-input">

        <div className='input'>
          <input type='text' name='user-entry'
            value={ this.state.inputValue }
            onChange={ this.handleInputChange }
            disabled={ this.state.inputState }
            className={ this.state.inputVisible }
          />
          </div>

        <div className='select'>
          <select value={ this.state.selectValue } onChange={ this.handleSelectChange }>
            <option value='enabled'>ENABLED</option>
            <option value='disabled'>DISABLED</option>
            <option value='hidden'>HIDDEN</option>
          </select>
        </div>

      </div>
    );
  }
}

export default TextInput;
