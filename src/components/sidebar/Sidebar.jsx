import "./sidebar.css";
import {
  UilHouseUser,
  UilComment,
  UilAirplay,
  UilUsersAlt,
  UilShoppingCartAlt,
} from "@iconscout/react-unicons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper p-20">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <UilHouseUser className="sidebarIcon" color="#0092E4" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <img
               src="assets/person/image0.jpeg"
               alt="avatar"
              className="topbarImg sidebarImg"
            />
            <span className="sidebarListItemText">User</span>
          </li>
          <li className="sidebarListItem">
            <UilComment className="sidebarIcon" color="#0092E4" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <UilAirplay className="sidebarIcon" color="#0092E4" />
            <span className="sidebarListItemText">Watch</span>
          </li>
          <li className="sidebarListItem">
            <UilUsersAlt className="sidebarIcon" color="#0092E4" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <UilShoppingCartAlt className="sidebarIcon" color="#0092E4" />
            <span className="sidebarListItemText">Marketplace</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
