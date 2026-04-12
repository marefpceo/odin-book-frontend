import { Outlet } from "react-router";

function App() {
  return (
    <div className="grid-rows-[auto_1fr]">
      <div>Header</div>
      <div className="h-lvh">Outlet</div>
    </div>
  );
}

export default App;
