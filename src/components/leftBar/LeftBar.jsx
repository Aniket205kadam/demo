import React from "react";
import "./LeftBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouse, 
  faMagnifyingGlass, 
  faCompass, 
  faMessage, 
  faHeart, 
  faSquarePlus 
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function LeftBar() {
  const profileUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const currentUser = {
    username: "aniket205kadam",
    email: "aniketrkadam205@gmail.com"
  };

  return (
    <div className="leftBar">
      <div className="container">
        <div className="app-heading">
          <span>Streamify</span>
        </div>
        <div className="menu">
          <div className="item">
            <FontAwesomeIcon icon={faHouse} size="2xl" />
            <span>Home</span>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>Search</span>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faCompass} />
            <span>Explore</span>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faYoutube} />
            <span>Reels</span>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faMessage} />
            <span>Messages</span>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faHeart} />
            <span>Notifications</span>
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faSquarePlus} />
            <span>Create</span>
          </div>

          <div className="user">
            <img src={profileUrl} alt="Profile" />
            <span>{currentUser.username}</span>
          </div>

        </div>
        <hr />
      </div>
    </div>
  );
}

export default LeftBar;
