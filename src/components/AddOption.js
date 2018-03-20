import React, { Component } from 'react';

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }

    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);

      this.setState(() => ({ error }));

      if (!error) {
        e.target.elements.option.value = '';
      }
    }

    render() {
      return (
        <div id="add-btn">
          {this.state.error && <p>{this.state.error}</p>}
          <form id="add-form" onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }

export default AddOption;
