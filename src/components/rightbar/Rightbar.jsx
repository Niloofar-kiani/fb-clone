import "./rightbar.css";
import { Users } from "../../dummyData";
import Friends from "../friends/Friends";

const Rightbar = () => {
  return (
    <div className="rightbar p-20">
      <h4 className="rightbarTitle">Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u)=>(
          <Friends key={u.id} user={u}/>
        ))}
  
      </ul>
    </div>
  );
};

export default Rightbar;
