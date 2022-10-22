import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar p-20">
      <h4 className="rightbarTitle">Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img
             src="assets/person/image2.jpeg"
             alt="avatar"
              className="profileImg"
            />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Roza Asatryan</span>
        </li>
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img src="assets/person/image1.jpeg" 
             alt="avatar"
            className="profileImg" />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Gagik Hovsepyan</span>
        </li>
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img
             src="assets/person/image3.jpeg" 
             alt="avatar"
              className="profileImg"
            />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Hrach Muradyan</span>
        </li>
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img
             src="assets/person/image4.jpeg" 
             alt="avatar"
              className="profileImg"
            />
            <span className="rightbarFriend"></span>
          </div>
          <span className="rightbarUsername">Garik Avetisyan</span>
        </li>
      </ul>
    </div>
  );
};

export default Rightbar;
