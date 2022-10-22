import "./share.css";
import { UilImages, UilVideo, UilGrin } from "@iconscout/react-unicons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <img
            src="assets/person/image0.jpeg"
            alt="avatar"
          className="shareProfileImg"
        /><input placeholder="What's in your mind?" className="shareInput"/>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <UilVideo className="shareIcon videoIcon" />
              <span className="shareOptionText">Live</span>
            </div>
            <div className="shareOption">
              <UilImages className="shareIcon imgIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <UilGrin className="shareIcon emojiIcon" />
              <span className="shareOptionText">Feeling/Activity</span>
            </div>
          </div>
          <button className="shareButton">POST</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
