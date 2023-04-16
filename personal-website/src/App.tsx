import "./App.css";

function App() {
  return (
    <>
      <div className="Landing bg-orange-100 w-full min-h-screen font-playfair">
        <div className="flex justify-around py-10 px-5 sm:p-10 text-xl">
          <p>About Me</p>
          <p>Projects</p>
          <p>Photography</p>
        </div>
        <div className="p-10 space-y-7 sm:space-y-9 flex flex-col sm:p-36 sm:text-left text-yellow-950">
          <h1 className="font-extrabold text-7xl sm:text-[10rem]">
            Adam Alilou
          </h1>
          <div className="font-semibold text-3xl sm:text-5xl">
            <p>Student based in London.</p>
          </div>
          <div className="flex flex-col text-3xl sm:text-5xl sm:space-y-5 pt-20">
            <a
              href="https://twitter.com/AdamAIiIou"
              target="_blank"
              className="hover:underline hover:text-blue-400 w-fit"
            >
              Twitter.
            </a>
            <a
              href="https://github.com/adam-devs"
              target="_blank"
              className=" hover:underline hover:text-black w-fit"
            >
              GitHub.
            </a>
            <a
              href="https://www.linkedin.com/in/adamalilou/"
              target="_blank"
              className=" hover:underline hover:text-blue-700 w-fit"
            >
              LinkedIn.
            </a>
          </div>
        </div>
      </div>
      <div className="History bg-white h-screen font-playfair p-10 sm:p-36">
        <div className="font text-3xl sm:text-5xl space-y-20 ">
          <div>
            <h2 className="text-5xl sm:text-7xl">2023</h2>
            <p>
              Currently on a 6 month placement with{" "}
              <span className="highlight-green">BNP Paribas</span>. Working in
              the Global Markets team as a frontend developer.
            </p>
          </div>

          <div>
            <h2 className="text-5xl sm:text-7xl">2020 - 2024</h2>
            <p>
              Studying Computing (Security and Reliability MEng) at{" "}
              <span className="highlight-blue">Imperial College London</span>.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center p-5">
        Website in the process of a redesign
      </div>
    </>
  );
}

export default App;
