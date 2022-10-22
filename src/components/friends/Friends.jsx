import "./friends.css";

const Friends = ({user}) => {
  return (
        <li className="rightbarFriend">
          <div className="profileImgContainer">
            <img
             src={user.profilePicture}
             alt="avatar"
              className="profileImg"
            />
          </div>
          <span className="rightbarUsername">{user.username}</span>
        </li>
       
  )
}

export default Friends