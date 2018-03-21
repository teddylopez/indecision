import React from 'react';

const Option = (props) => (
  <div className="options">
    <div className="left">{props.optionText}</div>
    <div className="right">
      <div
        className="small-grow"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
      X
      </div>
    </div>
  </div>
);

export default Option;
