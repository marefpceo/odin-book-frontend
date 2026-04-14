function MobileMenu({ isOpen, handleClose }) {
  // Prevents child div from triggering parent click event
  function preventClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={`${isOpen === true ? "translate-x-0" : "-translate-x-full"} absolute top-0 left-0 h-lvh w-full 
        bg-darkmode-altDark/60 z-30 transition-transform duration-500`}
      onClick={handleClose}
    >
      <div className="h-full w-10/12 bg-odinbook-light" onClick={preventClick}>
        Mobile menu
      </div>
    </div>
  );
}

export default MobileMenu;
