import image from "../assets/placeholder.png";

const Projects2 = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="max-w-2xl lg:max-w-5xl mx-auto py-10 px-8 md:px-24 lg:px-8">
        <div className="space-y-4 py-4">
          <h3 className="font-bold text-lg text-accent text-center">
            PORTFOLIO
          </h3>
          <p className="text-center font-semibold text-primary text-xl">
            Each project embarks on a unique adventure of development 🧩
          </p>
        </div>

        <div id="projects-list" className="">
          <div
            id="project"
            className="p-4 shadow-lg flex flex-col h-[45rem] gap-8 rounded-2xl bg-white lg:flex-row-reverse lg:h-96"
          >
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img src={image} alt="" className="object-cover" />
            </div>

            <div className="flex flex-col gap-6 items-center">
              <h1 className="font-bold text-xl text-primary">CAR RENTAL 🚗</h1>
              <p className="font-medium text-justify text-secondary">
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <ul className="flex gap-2 flex-wrap justify-center">
                <li className="px-2 py-1 bg-white drop-shadow-md rounded-md">React</li>
                <li className="px-2 py-1 bg-white drop-shadow-md rounded-md">
                  Typescript
                </li>
                <li className="px-2 py-1 bg-white drop-shadow-md rounded-md">
                  TailwindCSS
                </li>
                <li className="px-2 py-1 bg-white drop-shadow-md rounded-md">React</li>
                <li className="px-2 py-1 bg-white drop-shadow-md rounded-md">Git</li>
              </ul>

              <div className="flex gap-8 pb-4">
                <div>CODE</div>
                <div>Live Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
