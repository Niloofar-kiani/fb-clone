import "./rightbar.css";
import "../friends/friends.css"
import { Users } from "../../dummyData";
import Friends from "../friends/Friends";

const Rightbar = () => {
  return (
    <div className="rightbar p-20">
      <h4 className="rightbarTitle">Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user)=>(
          <Friends key={user.id} user={user}/>
        ))}
  
      </ul>
    </div>
  );
};

export default Rightbar;
