import "../assets/css/profile.css";
import Avatar from "./Avatar";

export default function Profile({ open, setOpen }) {
  return (
    <div className={open ? "profile active" : "profile"}>
      <div className="profile-wrapper">
        <div className="profile-topbar">
          <span className="heading">Profile</span>
          <div className="app-icon" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="profile-infos">
          <div className="avatar-wrapper">
            <Avatar height={150} width={150} />
          </div>
          <span className="username">Ines</span>
          <span className="email">engelines@gmail.com</span>
          <p className="status">desc</p>
          <button className="edit-btn">
            <i className="fa-solid fa-pen-to-square"></i>Profile
          </button>
        </div>
      </div>
    </div>
  );
}
