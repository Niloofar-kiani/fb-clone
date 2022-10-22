import "./topbar.css";
import {
  UilSearch,
  UilUser,
  UilCommentLines,
  UilBell,
} from "@iconscout/react-unicons";

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <UilSearch className="searchIcon" color="#4E4E4E" />
          <input
            type="search"
            placeholder="Search Facebook"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <UilUser />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <UilCommentLines />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <UilBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
         src="assets/person/image0.jpeg"
         alt="avatar"
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default TopBar;
