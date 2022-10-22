import "./post.css";
import {UilEllipsisH,  UilThumbsUp} from "@iconscout/react-unicons";

const Post = ({post}) => {
  console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="assets/person/image0.jpeg"
               alt="avatar"
              className="postProfileImg"
            />
            <span className="postUsername">Mia Posts</span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <UilEllipsisH />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">HEy smth</span>
          <img className="postImg" 
             src="assets/person/image0.jpeg"
             alt="avatar" />
        </div> 
        <div className="postBottom">
          <div className="postBottomLeft">
            <UilThumbsUp className="likeIcon" />
            <span className="postLikeCounter">32</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">50 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
