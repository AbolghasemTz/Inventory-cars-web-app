import React from "react";
import  ReactDOM  from "react-dom";
import {AiOutlineClose} from 'react-icons/ai'

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "25px",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex:1000
};

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal (
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLE} className="mt-4">
        <button onClick={() => onClose(false)} className="absolute top-0 right-0 p-1"><AiOutlineClose size={25}/></button>
        {children}
      </div>
    </>,
  document.getElementById('portal')
  );
}



