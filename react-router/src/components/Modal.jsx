import React from "react";
import ReactDOM from "react-dom"

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">{props.title}</h3>
        <p>{props.content}</p>
        <button className="ui primary button">Okay</button>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal;