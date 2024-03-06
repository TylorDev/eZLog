import { LeftSide } from "./LeftSide.jsx";
import { RightSide } from "./RightSide.jsx";

function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen   bg-center bg-cover "
      style={{ backgroundImage: "url('bg2.gif')" }}
    >
      <div className="[main] flex  text-white flex-col      mt-24 m-5 ">
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    </div>
  );
}

export default App;


