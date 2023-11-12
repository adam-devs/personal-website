import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import useScrollPosition from "./useScrollPosition";

enum Screen {
  Home = "home",
  About = "about",
  Projects = "projects",
}

const divider = () => {
  return (
    <div className="w-2/3 self-center ml-auto mr-auto h-[1px] bg-gray-300" />
  );
};

function App() {
  const [screen, updateScreen] = useState(Screen.Home);
  const scrolled = useScrollPosition();

  return (
    <div className="text-gray-700">
      {/* Header */}
      <div className="fixed flex-column w-full">
        <div className="flex w-full flex-row space-x-4 h-16 px-[350px] backdrop-blur-xl justify-between ">
          <div className={`p-5 ${scrolled < 80 && "opacity-0"}`}>
            Adam Alilou
          </div>
          <div className="flex flex-row ">
            <div className="ml-auto p-5 opacity-10">About</div>
            <div className="p-5 opacity-10">Projects</div>
          </div>
        </div>

        {scrolled !== 0 && divider()}
      </div>
      <div className="">
        {screen == Screen.Home && <Home />}
        <div className="text-center text-gray-500 m-2">
          Site under construction 🚧
        </div>

        <div className="text-center text-gray-300 m-2">© Adam Alilou</div>
      </div>
    </div>
  );
}

export default App;
