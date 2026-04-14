import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";

// TODO creating posts and comments should be using with modal
// TODO 3 main index files for nav - Home/Posts | Users | Profile
function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    if (isOpen === true) {
      return;
    } else {
      document.body.classList.add("overflow-hidden");
      setIsOpen(true);
    }
  }

  function handleClose() {
    if (isOpen === false) {
      return;
    } else {
      document.body.classList.remove("overflow-hidden");
      setIsOpen(false);
    }
  }

  return (
    <div className="relative grid-rows-[auto_1fr]">
      <MobileMenu isOpen={isOpen} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <div className="h-lvh">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
