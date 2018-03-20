import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
  <div id="option-header"><div className="left">Options</div>
    <button className="right" onClick={props.handleDeleteOptions}>Remove All</button>
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
