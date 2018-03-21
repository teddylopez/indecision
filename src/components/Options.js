import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div id="options-container">
    <div id="option-header">
      <span>Options</span>
      <div className="small-grow" onClick={props.handleDeleteOptions}>Remove All</div>
    </div>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
  </div>
);

export default Options;
