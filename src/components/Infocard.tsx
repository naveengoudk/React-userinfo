import axios from "axios";
import React, { useEffect } from "react";
import "./infocard.css";

const Userinfo: React.FC = () => {
  interface obj {
    [key: string]: any;
  }
  const [user, setUser] = React.useState<obj>({});
  const [count, setCount] = React.useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  const gettingData = async () => {
    await axios
      .get("https://randomuser.me/api")
      .then((res) => setUser(res.data.results[0]));
  };

  useEffect(() => {
    gettingData();
  }, [count]);

  if (!user) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="userinfo__container">
        <div className="user__profile">
          <div className="userprofile_top">
            <img src={user.picture.large}></img>
            <div className="user__info">
              <span id="name">
                {" "}
                {user.name.title +
                  " " +
                  user.name.first +
                  " " +
                  user.name.last}{" "}
              </span>
              <span>|</span>
              <span id="name"> {user.gender}</span>
            </div>
          </div>

          <div className="userprofile__bottom">
            <div className="profile__info">
              <span id="name">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>&nbsp; : &nbsp; </span>
              <span id="name">{user.email}</span>
            </div>
          </div>

          <div className="userprofile__bottom">
            <div className="profile__info">
              <span id="name">
                <i className="fa-solid fa-phone"></i>
              </span>
              <span> &nbsp; : &nbsp; </span>
              <span id="name">{user.phone}</span>
            </div>
          </div>

          <div className="userprofile__bottom">
            <div className="profile__info">
              <span id="name">
                <i className="fa-solid fa-address-book"></i>
              </span>
              <span>&nbsp; : &nbsp; </span>
              <span id="name">
                {" "}
                {user.location.city +
                  ", " +
                  user.location.state +
                  " ," +
                  user.location.country}{" "}
              </span>
            </div>
          </div>
        </div>

        <button onClick={clickHandler}>Change user</button>
      </div>
    );
  }
};
export default Userinfo;
