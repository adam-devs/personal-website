import pp from "./profile.jpeg";

type Info = {
  name: string;
  desc: string;
  title: string;
  colour: string;
  dates: string;
};

const Experience = (info: Info, swap = false) => {
  const title = (
    <>
      <div className="text-4xl">{info.title}</div>
      <div className="text-xl">{info.dates}</div>
    </>
  );

  const details = (
    <>
      <div className={`text-4xl ${info.colour}`}>{info.name}</div>
      <div className="text-2xl">{info.desc}</div>
    </>
  );

  let [left, right] = [title, details];

  if (swap) {
    left = details;
    right = title;
  }

  return (
    <div className="flex flex-row w-full pt-20 px-20">
      <div className="flex-column w-1/2">{left}</div>
      <div className="flex-column w-1/2 pl-4">{right}</div>
    </div>
  );
};

function Home() {
  const bnp = Experience({
    name: "BNP Paribas CIB",
    desc: "Working in the Global Markets team as a frontend developer. I migrated the webapp from Angular to React, working with users to better improve workflows and their experience.",
    title: "6 Month Placement",
    colour: "text-green-500",
    dates: "April - September 2023",
  });

  const imperial = Experience(
    {
      name: "Imperial College London",
      desc: "Spent each year working on various group projects, gaining experience with many languages and technologies.",
      title: "Computing (Security and Reliability) MEng",
      colour: "text-blue-500",
      dates: "2020 - 2024",
    },
    true
  );

  const myExperiences = [bnp, imperial];

  const divider = () => (
    <div className="w-2/3 self-center ml-auto mr-auto h-[1px] bg-gray-300" />
  );

  return (
    <>
      {/* <div className="min-w-full border-red-500 border-2  px-[200px]"> */}
      {/* Title */}
      <div className="flex min-w-full px-[200px] py-32 bg-orange-50">
        <div className="flex flex-row w-full">
          <div className="flex-column w-2/5">
            <img
              className="w-3/4 rounded-md"
              src={pp}
              alt="Image of myself, Adam Alilou. Wearing a dark pink shirt with the backdrop of the new york skyline."
            />
          </div>
          <div className="flex-column w-3/5">
            <div className="text-8xl">Adam Alilou</div>

            <div className="text-4xl mt-10">
              I’m a 4th and final year student studing Computer Science at
              Imperial College London.
            </div>

            <div className="text-2xl mt-10 opacity-10">
              Find me on linkedIn & twitter.
            </div>
          </div>
        </div>
      </div>

      {/* Experiences */}
      <div className="min-w-full py-32 px-[200px] bg-white">
        <div className="text-5xl">Experiences</div>

        <div className="w-full">{myExperiences}</div>
      </div>
    </>
  );
}

export default Home;
