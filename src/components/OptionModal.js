import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    className="modal"
  >
    {props.selectedOption && <h1>Ted says {props.selectedOption}!</h1>}
    <div id="modal-btn" onClick={props.handleClearSelectedOption}>Okay</div>
  </Modal>
);

export default OptionModal;
