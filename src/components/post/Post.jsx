import "./post.css";
import {UilEllipsisH, UilThumbsUp} from "@iconscout/react-unicons";
import {Users} from "../../dummyData";

const Post = ({post}) => {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="avatar"
              className="postProfileImg"
            />
            <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <UilEllipsisH />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <UilThumbsUp className="likeIcon" />
            <span className="postLikeCounter">{post.like} 32</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}50 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
