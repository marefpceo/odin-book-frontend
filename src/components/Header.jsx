import { Link } from "react-router";
import logoNoName from "../assets/odin-book-name-no-logo-350w.png";
import homeIcon from "../assets/homeIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import usersIcon from "../assets/usersIcon.svg";
import menuIcon from "../assets/menuIcon.svg";
import newPostIcon from "../assets/newPostIcon.svg";

function Header() {
  return (
    <header
      className="pt-1 dark:border-b-odinbook-altDark/25 dark:border-b 
      dark:shadow-[0_-5px_10px] dark:shadow-odinbook-light"
    >
      <div className="mx-2 flex justify-between">
        <div className="flex gap-x-2">
          <img src={menuIcon} alt="Menu icon" width={28} />
          <img src={logoNoName} alt="Odin Book name without logo" width={175} />
        </div>
        <Link to={"#newPost"}>
          <img src={newPostIcon} alt="New post icon" width={28} />
        </Link>
      </div>
      <div className="mt-4 pb-1 flex justify-evenly text-odinbook-altDark border-b border-odinbook-altDark/45">
        <Link to={"/"}>
          <img src={homeIcon} alt="Home icon" width={30} />
        </Link>
        <Link to={"#users"}>
          <img src={usersIcon} alt="Users icon" width={30} />
        </Link>
        <Link to={"#profile"}>
          <img src={profileIcon} alt="Profile icon" width={30} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
