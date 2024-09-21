import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from "../actions/ModalActions";
import "./Modal.css"

const Modal = () => {
  const dispatch = useDispatch();
  const Modal = useSelector((state) => state.modal);
  const { openClose, content } = Modal;

  let modalInlineStyle = {
    display: openClose === "open" ? "block" : "none",
  };

  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };

  return (
    <div className="site-modal" style={modalInlineStyle}>
      <div className="modal-content">
        <div className="col right">
          <span onClick={closeModalHandler} className="modal-close">&times;</span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
