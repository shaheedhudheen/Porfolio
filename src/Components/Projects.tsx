import placeholder from "../assets/placeholder.png";
import { BiLinkExternal } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

const Projects = () => {
  return (
    //section
    <section className="bg-background py-10">
      {/* container */}
      <div id="container" className="max-w-5xl mx-auto px-4 md:p-8">
        {/* contents */}
        <div id="project-content">
          <h1 className="font-semibold text-lg text-center text-[#2962FF]">
            PORTFOLIO
          </h1>
          <h2 className="text-2xl font-bold text-primary text-center">
            Each project embarks on a unique adventure of development 🧩
          </h2>

          {/* projects list */}
          <div id="project-list" className="grid md:p-16">
            <div
              id="project"
              className="p-4 md:p-8 flex flex-col gap-4 rounded-2xl shadow-lg "
            >
              <div className="overflow-hidden scroll-smooth rounded-2xl bg-white h-96 shadow-lg ">
                <img
                  src={""}
                  alt=""
                  className="hover:-translate-y-1/2 transition-transform duration-[10s] "
                />
              </div>
              <div className="flex flex-col items-center gap-4 py-4">
                <h1 className="text-xl">Project 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam voluptates corporis laboriosam temporibus! Vitae quae
                  officia animi eum. Praesentium, nam esse. Repellat incidunt
                  esse rem nam sit aliquam impedit doloremque!
                </p>

                <div className="flex gap-8">
                  <a href="#">
                    <BiLinkExternal size={32} />
                  </a>
                  <a href="#">
                    <BiLogoGithub size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

{
  /* <div className="max-w-5xl mx-auto px-5 flex flex-col items-center gap-6">
  <h3 className="font-semibold text-lg text-[#2962FF]">Portfolio</h3>
  <h2 className="text-2xl font-bold text-primary text-center">
    Each project embarks on a unique adventure of development 🧩
  </h2>
  <div id="project-cards">
    <div className="h-[45rem] flex flex-col">
      <div className="overflow-hidden p-4 object-cover">
        <img
          src={placeholder}
          alt="frontpage of project"
          className="rounded-2xl "
        />
      </div>
      <div>
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta
          nisi, qui maxime laboriosam nesciunt, provident vitae labore corporis
          hic ad ullam. Adipisci dicta eligendi sapiente eius saepe animi
          eveniet? Magni tempora architecto nemo accusantium doloremque maxime
          labore velit provident fugiat consequatur mollitia illum, eum suscipit
          nisi sapiente vero, laboriosam eligendi id atque minima, perferendis
          similique in quibusdam non. Provident?
        </p>
      </div>
    </div>
  </div>
</div>; */
}
