import { Link } from "react-router";
import logoNoName from "../assets/odin-book-name-no-logo-350w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSquarePlus,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Header({ handleOpen }) {
  return (
    <header
      className="pt-1 dark:border-b-odinbook-altDark/25 dark:border-b dark:shadow-[0_-5px_10px] 
      dark:shadow-odinbook-light"
    >
      <div className="mx-2 flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <FontAwesomeIcon icon={faBars} size="xl" onClick={handleOpen} />
          <img src={logoNoName} alt="Odin Book name without logo" width={150} />
        </div>
        <Link to={"#newPost"}>
          <FontAwesomeIcon icon={faSquarePlus} size="xl" />
        </Link>
      </div>
      <div className="mt-4 pb-2 flex justify-evenly border-b border-odinbook-altDark/45">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} size="xl" />
        </Link>
        <Link to={"#users"}>
          <FontAwesomeIcon icon={faUserGroup} size="xl" />
        </Link>
        <Link to={"#profile"}>
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
