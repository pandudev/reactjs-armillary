import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const linkToProfile = `/${props.profile.login}`;
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src={props.profile.avatar_url} alt="" />
      </div>
      <div className="profile__about">
        <h3>{props.profile.name}</h3>
        <p>
          {props.profile.bio}, {props.profile.location}
        </p>
        <div className="profile__about__follow">
          <p>{props.profile.followers} Followers</p>
          <p>{props.profile.following} Following</p>
          <Link to={linkToProfile}>
            <p>{props.profile.public_repos} Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
