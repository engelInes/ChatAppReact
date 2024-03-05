import { useState } from "react";
import "../assets/css/sidebar.css";
import ChatItem from "./ChatItem";
import ContactItem from "./ContactItem";

export default function Sidebar() {
  const [newChat, setNewChat] = useState(false);
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="top">
          <div>
            <Avatar src="" heigth={45} width={45} />
          </div>
          {newChat && <span className="heading">Add Conversation</span>}
          <div
            className={newChat ? "app-icon active" : "app-icon"}
            onClick={() => setNewChat((prev) => !prev)}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="center">
          <div className="search-wrapp">
            <div className="input-wrapper">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search a conversation" />
            </div>
          </div>
          <div className="center-wrapper">
            {newChat ? (
              <div className="items-wrapper">
                {[...Array(50)].map((contact, index) => (
                  <ContactItem key={index} />
                ))}
              </div>
            ) : (
              <div className="items-wrapper">
                {[...Array(50)].map((chat, index) => (
                  <ChatItem key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bottom">
          <button className="logout-btn">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>Logout
          </button>
        </div>
      </div>
    </div>
  );
}
