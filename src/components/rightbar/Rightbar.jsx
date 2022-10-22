import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar p-20">
      <h4 className="rightbarTitle">Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img
              src="data:image/png;base64,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"
              alt="avatar"
              className="profileImg"
            />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Roza Asatryan</span>
        </li>
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img src="assets/" className="profileImg" />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Roza Asatryan</span>
        </li>
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img
              src="data:image/png;base64,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"
              alt="avatar"
              className="profileImg"
            />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Roza Asatryan</span>
        </li>
      </ul>
    </div>
  );
};

export default Rightbar;
