import React from 'react';

const Option = (props) => (
  <div className="options">
    <div className="left">{props.optionText}</div>
    <div className="right">
      <button
        className="remove-btn"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
      remove
      </button>
    </div>
  </div>
);

export default Option;
