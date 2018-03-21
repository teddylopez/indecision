import React, { Component } from 'react';

const Action = (props) => (
  <div className="big-grow">
    <div id="main-btn"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
      </div>
  </div>
);

export default Action;
