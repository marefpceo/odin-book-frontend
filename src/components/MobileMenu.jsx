import { Link, replace, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthProvider";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function MobileMenu({ isOpen, handleClose }) {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  // Prevents child div from triggering parent click event
  function preventClick(e) {
    e.stopPropagation();
  }

  function handleClick() {
    logoutUser();
    navigate("/login", replace);
  }

  return (
    <div
      className={`${isOpen === true ? "translate-x-0" : "-translate-x-full"} absolute top-0 left-0 h-dvh w-full 
        bg-darkmode-altDark/60 z-30 transition-transform duration-300`}
      onClick={handleClose}
    >
      <div
        className="h-full w-10/12 p-2 pb-8 flex flex-col bg-odinbook-light dark:bg-darkmode-dark"
        onClick={preventClick}
      >
        <div className="mt-4 p-4 flex items-center gap-x-2 shadow-[0_1px_5px_-1px] shadow-odinbook-altDark dark:bg-darkmode-altDark rounded-md">
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <p>User Name </p>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <p>Follow us everywhere!</p>
          <span className="flex mt-8 gap-x-8 text-odinbook-dark">
            <Link
              to={"https://www.github.com/marefpceo"}
              target="_blank"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/lamarstevens"}
              target="_blank"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Link>
            <Link
              to={"https://www.x.com/stevens14704"}
              target="_blank"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faXTwitter} size="2xl" />
            </Link>
          </span>
        </div>
        <Button
          text={"Log out"}
          style={
            "w-full h-10 text-odinbook-light bg-odinbook-altDark z-50 self-center rounded-md dark:bg-darkmode-altDark"
          }
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default MobileMenu;
