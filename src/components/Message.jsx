import React from "react";

export default function Message() {
  return (
    <div className="message">
      <div className="message-wrapper">
        <div className="image-wrapper">
          <img src="" alt="" />
          <div className="image-count">+2</div>
        </div>
        <p>message</p>
      </div>
      <span className="timeline">just now</span>
    </div>
  );
}
