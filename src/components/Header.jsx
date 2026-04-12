import logoNoName from "../assets/odin-book-name-no-logo-350w.png";

function Header() {
  return (
    <header className="p-1 flex justify-between items-center">
      <img src={logoNoName} alt="Odin Book name without logo" width={175} />
      <div>Home(Posts index), profile, users</div>
    </header>
  );
}

export default Header;
