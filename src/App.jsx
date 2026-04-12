import { Outlet } from "react-router";
import Header from "./components/Header";

// TODO creating posts and comments should be using with modal
// TODO 3 main index files for nav - Home/Posts | Users | Profile
function App() {
  return (
    <div className="grid-rows-[auto_1fr]">
      <Header />
      <div className="h-lvh">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
