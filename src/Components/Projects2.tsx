import image from "../assets/placeholder.png";

const Projects2 = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="max-w-2xl lg:max-w-5xl bg-red-200 h-screen mx-auto py-10">
        <h3 className="font-bold text-lg text-accent text-center">PORTFOLIO</h3>
        <p className="text-center font-semibold text-primary text-xl">
          Each project embarks on a unique adventure of development 🧩
        </p>

        <div id="projects-list" className="">

          <div id="project" className="px-8">
            <div className="p4">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
