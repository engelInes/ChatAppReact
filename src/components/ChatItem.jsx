import React from "react";
import Avatar from "./Avatar";

export default function ChatItem({ setChat }) {
  return (
    <div className="chat-item" onClick={() => setChat(true)}>
      <Avatar src="" height={55} width={55} />
      <div className="chat-item-infos">
        <div className="avatar-infos">
          <span className="username">Ines Engel</span>
          <span className="timeline">1h ago</span>
        </div>
        <p className="last-message">Say hi! to Ines Engel</p>
      </div>
    </div>
  );
}
